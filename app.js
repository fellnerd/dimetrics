const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Environment Configuration
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

// Logging für Plesk
console.log(`Starting Next.js app in ${dev ? 'development' : 'production'} mode`)
console.log(`Server will run on ${hostname}:${port}`)

// Next.js App initialisieren
const app = next({ 
  dev, 
  hostname, 
  port,
  // Für Plesk Kompatibilität
  conf: {
    compress: true,
    poweredByHeader: false,
  }
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Parse URL
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // Erweiterte Logging für Debugging
      if (dev) {
        console.log(`${req.method} ${req.url}`)
      }

      // Handle alle Requests mit Next.js
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })

  // Error Handling
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use`)
    } else {
      console.error('Server error:', err)
    }
    process.exit(1)
  })

  // Graceful Shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully')
    server.close(() => {
      console.log('Process terminated')
      process.exit(0)
    })
  })

  process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully')
    server.close(() => {
      console.log('Process terminated')
      process.exit(0)
    })
  })

  // Server starten
  server.listen(port, hostname, () => {
    console.log(`✓ Next.js app ready on http://${hostname}:${port}`)
    console.log(`✓ Environment: ${process.env.NODE_ENV}`)
    console.log(`✓ Node.js version: ${process.version}`)
  })
})