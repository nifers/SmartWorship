// Vercel Serverless Entry Point
// This file wraps the ESM Express app for Vercel's serverless environment

export default async function handler(req, res) {
  try {
    const { default: app } = await import('../src/index.js');
    return app(req, res);
  } catch (error) {
    console.error('Failed to load app:', error);
    res.status(500).json({ 
      error: 'Server initialization failed',
      message: error.message,
      stack: error.stack
    });
  }
}
