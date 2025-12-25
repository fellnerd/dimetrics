import { NextRequest, NextResponse } from "next/server";

// 🛡️ SECURITY FIX: Helper function for HTML escaping
function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validierung der erforderlichen Felder
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Erforderliche Felder fehlen" },
        { status: 400 }
      );
    }

    // 🛡️ SECURITY FIX: Inputs escapen
    const cleanName = escapeHtml(`${formData.firstName} ${formData.lastName}`);
    const cleanEmail = escapeHtml(formData.email);
    const cleanPhone = formData.phone ? escapeHtml(formData.phone) : "";
    const cleanCompany = formData.company ? escapeHtml(formData.company) : "";
    const cleanMessage = escapeHtml(formData.message).replace(/\n/g, "<br>");

    // E-Mail-Template erstellen
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3d55e2, #5facdb, #A100FF); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #3d55e2; margin-bottom: 5px; }
          .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #5facdb; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Neue Kontaktanfrage</h1>
            <p>Dimetrics.io Kontaktformular</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${cleanName}</div>
            </div>
            
            <div class="field">
              <div class="label">E-Mail:</div>
              <div class="value">${cleanEmail}</div>
            </div>
            
            ${
              cleanPhone
                ? `
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value">${cleanPhone}</div>
            </div>
            `
                : ""
            }
            
            ${
              cleanCompany
                ? `
            <div class="field">
              <div class="label">Unternehmen:</div>
              <div class="value">${cleanCompany}</div>
            </div>
            `
                : ""
            }
            
            <div class="field">
              <div class="label">Nachricht:</div>
              <div class="value">${cleanMessage}</div>
            </div>
            
            <div class="footer">
              <p>Diese E-Mail wurde über das Kontaktformular auf dimetrics.io gesendet.</p>
              <p>Zeitpunkt: ${new Date().toLocaleString("de-DE", {
                timeZone: "Europe/Vienna",
              })}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Brevo API-Request direkt mit fetch
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Dimetrics Kontaktformular",
          email: "noreply@dimetrics.io",
        },
        to: [
          {
            email: "admin@dimetrics.io",
            name: "Admin Dimetrics",
          },
          {
            email: "d.fellner@dimetrics.io",
            name: "Daniel Fellner",
          },
        ],
        replyTo: {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
        },
        subject: `Neue Kontaktanfrage von ${formData.firstName} ${formData.lastName}`,
        htmlContent: emailHtml,
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo API Fehler:", brevoResponse.status, errorText);
      throw new Error(
        `Brevo API Fehler: ${brevoResponse.status} - ${errorText}`
      );
    }

    const result = await brevoResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: "E-Mail erfolgreich gesendet",
        messageId: result.messageId || "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);

    return NextResponse.json(
      {
        error: "Fehler beim Senden der E-Mail",
        details: error instanceof Error ? error.message : "Unbekannter Fehler",
      },
      { status: 500 }
    );
  }
}
