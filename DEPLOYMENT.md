# Plesk Deployment Anleitung für dimetrics.io

## Voraussetzungen
- Node.js 23.11.1 (verfügbar in Plesk)
- NPM oder Yarn
- Plesk Panel mit Node.js Support

## Deployment Schritte

### 1. Dateien auf Server hochladen
Alle Projekt-Dateien in das Plesk-Verzeichnis hochladen (normalerweise `httpdocs` oder `public_html`)

### 2. Plesk Node.js Konfiguration
In Plesk Panel unter "Node.js":
- **Startup file**: `app.js`
- **Application mode**: `production`
- **Node.js version**: `23.11.1`

# Plesk Deployment Anleitung für dimetrics.io

## Voraussetzungen
- Node.js 22.20.0 (konfiguriert in Plesk)
- NPM oder Yarn
- Plesk Panel mit Node.js Support

## Deployment Schritte

### 1. Dateien auf Server hochladen
Alle Projekt-Dateien außer den in `.pleskignore` angegebenen in das Plesk-Verzeichnis hochladen:
- Per FTP/SFTP alle Dateien außer `node_modules/`, `.next/`, `.git/` hochladen
- Oder ZIP-Upload über Plesk File Manager verwenden

### 2. Plesk Node.js Konfiguration
In Plesk Panel unter "Node.js":
- **Node.js version**: `22.20.0` auswählen
- **Application mode**: `production`
- **Startup file**: `app.js`
- **Application root**: `/` (Standard)
- **Application URL**: Ihre Domain (z.B. `dimetrics.io`)

### 3. Environment Variablen setzen
In Plesk Panel unter "Node.js" → "Environment Variables":
```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
BREVO_API_KEY=your_actual_brevo_api_key_here
NEXT_TELEMETRY_DISABLED=1
```

### 4. Dependencies installieren und Build erstellen

**Wichtig**: Bei Berechtigungsproblemen in Plesk folgende Schritte beachten:

#### Option A: Plesk Panel Method (Empfohlen)
In Plesk Panel unter "Node.js" → "NPM":

**Schritt 1**: Produktions-package.json verwenden
```bash
# Falls Berechtigungsprobleme auftreten, verwende die optimierte package.json:
cp package.plesk.json package.json
```

**Schritt 2**: NPM Install (nur Production Dependencies)
```bash
npm install --only=production
```

**Schritt 3**: Production Build
```bash
npm run build
```

#### Option B: SSH/Terminal Method (Falls verfügbar)
```bash
# Berechtigungen korrigieren (falls notwendig)
sudo chown -R psacln:psaserv /var/www/vhosts/dimetrics.io/dimetrics_website/dimetrics/
sudo chmod -R 755 /var/www/vhosts/dimetrics.io/dimetrics_website/dimetrics/

# NPM Cache leeren
npm cache clean --force

# Installation
npm install --only=production
npm run build
```

#### Bei persistierenden Berechtigungsproblemen:
1. **File Manager verwenden**: Package.json über Plesk File Manager bearbeiten
2. **DevDependencies entfernen**: Verwende `package.plesk.json` als `package.json`
3. **Support kontaktieren**: Plesk-Administrator um Berechtigungsanpassung bitten

### 5. Anwendung starten
- In Plesk Panel "Enable Node.js" aktivieren
- Status sollte auf "Running" wechseln
- Bei Problemen in "Logs" nachsehen

## Wichtige Plesk-spezifische Dateien

### `app.js`
Custom Server Entry Point mit:
- Besserer Error Handling
- Graceful Shutdown
- Plesk-optimierte Konfiguration

### `web.config`
IIS-Konfiguration für:
- URL Rewriting
- Static Content Types
- Gzip Compression
- Security Headers

### `.pleskignore`
Definiert Dateien, die nicht hochgeladen werden sollen

## Troubleshooting

### Häufige Probleme:

1. **App startet nicht**
   - Logs in Plesk Panel unter "Node.js" → "Logs" prüfen
   - Environment-Variablen kontrollieren
   - Sicherstellen, dass Build erfolgreich war

2. **Port bereits in Verwendung**
   - Plesk startet Apps automatisch auf verfügbarem Port
   - PORT Environment-Variable wird von Plesk überschrieben

3. **Module nicht gefunden**
   - `npm install` erneut ausführen
   - Sicherstellen, dass `package.json` hochgeladen wurde

4. **API-Routen funktionieren nicht**
   - BREVO_API_KEY Environment-Variable setzen
   - Firewall-Einstellungen in Plesk prüfen

### Performance Optimierung:

1. **Ressourcen-Limits erhöhen**
   - In Plesk Panel unter "Resource Usage"
   - Memory Limit: mindestens 512MB
   - CPU Time: ausreichend für Build-Prozess

2. **Caching aktivieren**
   - Static Content Caching in Plesk aktivieren
   - Gzip Compression durch `web.config` bereits aktiviert

3. **SSL/HTTPS konfigurieren**
   - SSL-Zertifikat in Plesk Panel aktivieren
   - Automatische HTTP→HTTPS Umleitung aktivieren

## Monitoring und Wartung

### Logs überwachen:
- Plesk Panel → "Node.js" → "Logs"
- Bei Fehlern Application neu starten

### Updates deployen:
1. Neue Dateien hochladen
2. `npm install` (falls package.json geändert)
3. `npm run build`
4. Application in Plesk neu starten

### Backup:
- Regelmäßige Backups über Plesk Panel
- Environment-Variablen dokumentieren

## Sicherheit

### Bereits implementiert:
- Security Headers in `next.config.ts` und `web.config`
- Environment-Variablen für sensible Daten
- Powered-by Header deaktiviert

### Zusätzliche Empfehlungen:
- Firewall Rules in Plesk konfigurieren
- SSL-Zertifikat verwenden
- Regelmäßige Updates der Dependencies

## Support
Bei Problemen kontaktieren Sie: support@dimetrics.io