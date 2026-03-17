/**
 * @typedef {Object} UserContract
 * @property {string} username
 * @property {string} role
 */

/**
 * Factory for user session payload
 * @param {string} username 
 * @param {string} [role='standard'] 
 * @returns {UserContract}
 */
export default function user(username, role = 'standard') {
    return {
        username: username,
        role: role
    }
}