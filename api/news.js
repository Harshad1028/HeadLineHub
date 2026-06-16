// api/news.js
export default async function handler(req, res) {
  // ફ્રન્ટએન્ડમાંથી મોકલેલી કેટેગરી અને પેજ નંબર મેળવો
  const { category = 'general', page = 1 } = req.query;
  const apikey = process.env.VITE_NEWS_API; // વેરસેલની કી વાંચશે

  const Url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&country=in&pageSize=20&page=${page}&apiKey=${apikey}`;

  try {
    const response = await fetch(Url);
    const data = await response.json();
    
    // CORS એરર ન આવે એટલે આ હેડર જરૂરી છે
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news from serverless function' });
  }
}