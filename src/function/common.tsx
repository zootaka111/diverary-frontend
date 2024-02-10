/**
 * Validate input email
 * @param {string} email The email address to validate
 * @returns {boolean} true if the email format is valid, false otherwise
 */
export const isValidEmailFormat = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
};

/**
 * 必須の入力が空でないかを確認し、空であればアラートを表示します。
 * @param {...string} args 必須の入力値
 * @returns {boolean} すべての必須の入力が空でない場合はtrue、それ以外の場合はfalse
 */
export const isValidRequiredInput = (...args: string[]): boolean => {
    return args.every(arg => arg !== "");
};