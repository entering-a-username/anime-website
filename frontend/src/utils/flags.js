import emojiFlags from "emoji-flags";

export function getFlags(countryCode) {
    return emojiFlags.countryCode(countryCode).emoji;
}
