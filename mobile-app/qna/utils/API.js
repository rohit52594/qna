/**
 * BASE URL CONSTANTS
 */
export const HOSTNAME = "http://localhost"
export const PORT = 5000
export const BASE_URI = HOSTNAME + ":" + PORT
export const API_ROOT = BASE_URI + '/api/'

/**
 * SUBJECTS APIS
 */
export const GET_ALL_SUBJECTS = API_ROOT + 'subjects/all_subjects'
export const GET_SUBJECT_BY_ID = API_ROOT + 'subjects/get_subject/:subjectId'

/**
 * SLIDER APIS
 */
export const GET_ACTIVE_SLIDERS = API_ROOT + 'ads/get_active_ads'
export const GET_SLIDER_BY_ID = API_ROOT + 'ads/get_ad_by_id/:adId'
export const GET_ALL_SLIDERS = API_ROOT + 'ads/get_ads'

/**
 * QUESTION APIS
 */
export const GET_RANDOM_QUESTIONS = API_ROOT + 'questions/get_random_questions'
export const GET_RANDOM_QUESTIONS_BY_SUBJECT = API_ROOT + 'questions/get_random_questions_by_subject/:subjectId'