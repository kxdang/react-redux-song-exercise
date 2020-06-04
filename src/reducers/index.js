const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'No Diggity', duration: '3:15' },
    { title: 'All Star', duration: '1:45' },
    { title: 'I want it that way', duration: '2:15' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}