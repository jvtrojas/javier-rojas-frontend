const prod = process.env.NODE === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://simulacro-site.herokuapp.com/' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://simulacro-site.herokuapp.com/',
    'process.env.CLIENT_ID': 'hb9rp3aKKq696n28kDAZn9J4eoLcbZYB'
}