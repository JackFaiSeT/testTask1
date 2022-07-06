export const usersAdapter = (users) => {
  const countryValues = ['use', 'russia']
  return users.map(user => {
    return {
      id: user.id || "id" + Math.random().toString(16).slice(2),
      avatar: user.avatar || '',
      title: user.title || '',
      country: user.country || countryValues[Math.floor(Math.random() * countryValues.length)],
      score: user.score || Math.floor(Math.random() * 30),
      subtitle: user.subtitle || '',
      address: user.address || 'The user did not specify his address'
    }
  })
}