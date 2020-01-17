function palindromicNumberGenerator(num) {
  // do work here
  answer = { value: 0, steps: 0 };

  function isPalindrome(num) {
    let ini = num.toString();
    let conv = ini
      .split("")
      .reverse()
      .join("");
    if (ini === conv) {
      return (answer.value = parseInt(conv));
    } else {
      answer.steps++;
      return isPalindrome(num + parseInt(conv));
    }
  }

  isPalindrome(num);

  return answer;
}

module.exports = palindromicNumberGenerator;
