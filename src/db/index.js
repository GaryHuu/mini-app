import dayjs from 'dayjs'

const MY_IDS_OF_MATCHES = 'MY_IDS_OF_MATCHES'

export const createNewMatch = (name = '') => {
  try {
    const newId = dayjs().valueOf()
    const newMatch = {
      id: newId,
      name,
    }

    const myCurrentMatches =
      JSON.parse(localStorage.getItem(MY_IDS_OF_MATCHES)) || []

    localStorage.setItem(
      MY_IDS_OF_MATCHES,
      JSON.stringify([newMatch, ...myCurrentMatches])
    )

    // Set Default Players
    localStorage.setItem(newId, JSON.stringify([]))

    return newMatch
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getAllMatches = () => {
  try {
    const myCurrentMatches =
      JSON.parse(localStorage.getItem(MY_IDS_OF_MATCHES)) || []

    return myCurrentMatches
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getMatchByID = (id) => {
  try {
    const myCurrentMatches =
      JSON.parse(localStorage.getItem(MY_IDS_OF_MATCHES)) || []

    return myCurrentMatches.find((item) => item.id === +id)
  } catch (error) {
    console.error(error)
    return []
  }
}

export const deleteTheMatch = (id) => {
  try {
    const myCurrentMatches =
      JSON.parse(localStorage.getItem(MY_IDS_OF_MATCHES)) || []
    const newMatches = myCurrentMatches.filter((match) => match.id !== id)

    localStorage.setItem(MY_IDS_OF_MATCHES, JSON.stringify(newMatches))

    localStorage.removeItem(id)

    return newMatches
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getPlayersOfMatch = (id) => {
  try {
    const players = JSON.parse(localStorage.getItem(id)) || []
    return players
  } catch (error) {
    console.error(error)
    return []
  }
}

export const createNewPlayerOfMatch = (matchID, name = '') => {
  try {
    const newId = dayjs().valueOf()
    const newPlayer = {
      id: newId,
      name,
    }
    const currentPlayers = JSON.parse(localStorage.getItem(matchID)) || []

    const existPlayerName = !!currentPlayers.find(
      (player) => player.name === name
    )

    if (existPlayerName) {
      return null
    }

    let numberGamesPlayed = 0

    if (currentPlayers?.length !== 0) {
      numberGamesPlayed = currentPlayers?.[0]?.scores?.length
    }

    newPlayer.scores = numberGamesPlayed
      ? new Array(numberGamesPlayed).fill(0)
      : []

    localStorage.setItem(
      matchID,
      JSON.stringify([...currentPlayers, newPlayer])
    )

    return newPlayer
  } catch (error) {
    console.error(error)
    return null
  }
}

export const renamePlayerOfMatch = (matchID, playerID, name = '') => {
  try {
    const currentPlayers = JSON.parse(localStorage.getItem(matchID)) || []
    const existPlayerName = !!currentPlayers.find(
      (player) => player.name === name && player.id !== playerID
    )

    if (existPlayerName) {
      return null
    }

    const index = currentPlayers.findIndex((player) => player.id === playerID)

    currentPlayers[index].name = name

    localStorage.setItem(matchID, JSON.stringify(currentPlayers))

    return currentPlayers
  } catch (error) {
    console.error(error)
    return null
  }
}
