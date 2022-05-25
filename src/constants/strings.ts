export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Brigliant!', 'Magnific', 'Grondius!']
export const GAME_COPIED_MESSAGE = 'Giug vegn copiaus egl archiv provisoric'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Buc avunda bustabs'
export const WORD_NOT_FOUND_MESSAGE = 'Il plaid ei buc valeivels'
export const HARD_MODE_ALERT_MESSAGE =
  'Il modus grev sa mo vegnir activaus all\'entschatta!'
export const HARD_MODE_DESCRIPTION =
  'Mintga tip scuvretg sto vegnir druvaus ella proxima emprova.'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Per megliera veseivladad da colurs.'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Il plaid encuretg ei ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Drova ${guess} en la posiziun ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Emprova sto cumpigliar ${letter}`
export const ENTER_TEXT = 'Confirmar'
export const DELETE_TEXT = 'Stizzar'
export const STATISTICS_TITLE = 'Statistica'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuziun d\'emprovas'
export const NEW_WORD_TEXT = 'Niev plaid en'
export const SHARE_TEXT = 'Parter'
export const CUSTOM_SHARE_MESSAGE = `Contas emprovas drovas ti?\nGioga il ${GAME_TITLE} sin plaidin.ugsagogn.ch!`
export const TOTAL_TRIES_TEXT = 'Emprovas'
export const SUCCESS_RATE_TEXT = 'Quota da success'
export const CURRENT_STREAK_TEXT = 'Seria da success'
export const BEST_STREAK_TEXT = 'Pli liunga seria da success'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Ei para che Vus druveis in navigatur pli special. Nus recumandein da druvar il navigatur da Vies appart."
