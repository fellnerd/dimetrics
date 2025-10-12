#!/bin/bash

# Plesk Installation Script für dimetrics.io
# Führe dieses Script aus, falls manuelle Installation nötig ist

echo "🚀 Starting Plesk deployment for dimetrics.io..."

# 1. Backup der ursprünglichen package.json
if [ -f "package.json" ]; then
    echo "📁 Backing up original package.json..."
    cp package.json package.json.backup
fi

# 2. Verwende optimierte package.json für Production
if [ -f "package.plesk.json" ]; then
    echo "🔧 Using optimized package.json for Plesk..."
    cp package.plesk.json package.json
fi

# 3. NPM Cache leeren
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# 4. Nur Production Dependencies installieren
echo "📦 Installing production dependencies..."
npm install --only=production --no-optional

# 5. Build erstellen
echo "🔨 Building application..."
npm run build

# 6. Erfolg melden
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "📝 Next steps:"
    echo "   1. Set environment variables in Plesk Panel"
    echo "   2. Set startup file to 'app.js'"
    echo "   3. Enable Node.js application"
else
    echo "❌ Deployment failed. Check logs for details."
fi