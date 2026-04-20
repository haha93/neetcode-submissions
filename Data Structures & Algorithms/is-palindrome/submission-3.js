class Solution {
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isAlphaNumeric = (ch) => {
            return (
                (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9')
            );
        };

        while (left < right) {
            if (!isAlphaNumeric(s[left])) {
                left++;
                continue;
            }

            if (!isAlphaNumeric(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}