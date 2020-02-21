module.exports = function toReadable (number) {
  let obj = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven',
    8: 'eight', 9: 'nine', 10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
  };
  let obj2 = {
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
  };
  number = String(number);
  if (number.length == 1 || number == 10) return obj[number];
  if (number.length == 2 && number == '11' || number == '12' || number == '13' || number == '14' || number == '15' || number == '16' || number == '17' || number == '18' || number == '19' || number == '20' || number == '30' || number == '40' || number == '50' || number == '60' || number == '70' || number == '80' || number == '90') return obj2[number];
  if (number.length == 2 && number[1] != 0) {
    if (number[0] == 2) return 'twen' + 'ty ' + obj[number[1]];
    if (number[0] == 3) return 'thirty ' + obj[number[1]];
    if (number[0] == 4)  return 'forty ' + obj[number[1]];
    if (number[0] == 5) return 'fifty ' + obj[number[1]];
    if (number[0] == 8)  return 'eighty ' + obj[number[1]];
    return obj[number[0]] + 'ty ' + obj[number[1]];
  }
  if (number.length == 2 && number[1] == 0) return obj[number[0]] + 'ty';
  if (number.length == 3 && number[1] == 0 && number[2] == 0) return obj[number[0]] + ' hundred';
  if (number.length == 3 && (number[1] + number[2]) == '10' || (number[1] + number[2]) == '11' || (number[1] + number[2]) == '12' || (number[1] + number[2]) == '13' || (number[1] + number[2]) == '14' || (number[1] + number[2]) == '15' || (number[1] + number[2]) == '16' || (number[1] + number[2]) == '17' || (number[1] + number[2]) == '18' || (number[1] + number[2]) == '19' || (number[1] + number[2]) == '20') return obj[number[0]] + ' hundred ' + obj2[number[1] + number[2]];
  if (number.length == 3 && number[1] == 0) return obj[number[0]] + ' hundred ' + obj[number[2]];
  if (number.length == 3 && number[2] != 0) {
    if (number[1] == 2) return obj[number[0]] + ' hundred ' + 'twen' + 'ty ' + obj[number[2]];
    if (number[1] == 3) return obj[number[0]] + ' hundred ' + 'thirty ' + obj[number[2]];
    if (number[1] == 4) return obj[number[0]] + ' hundred ' + 'forty ' + obj[number[2]];
    if (number[1] == 5) return obj[number[0]] + ' hundred ' + 'fifty ' + obj[number[2]];
    if (number[1] == 8) return obj[number[0]] + ' hundred ' + 'eighty ' + obj[number[2]];
    return obj[number[0]] + ' hundred ' + obj[number[1]] + 'ty ' + obj[number[2]];
  }
  if (number.length == 3 && number[2] == 0) {
    if (number[1] == 2) return obj[number[0]] + ' hundred ' + 'twenty';
    if (number[1] == 3) return obj[number[0]] + ' hundred ' + 'thirty';
    if (number[1] == 4) return obj[number[0]] + ' hundred ' + 'forty';
    if (number[1] == 5) return obj[number[0]] + ' hundred ' + 'fifty';
    if (number[1] == 8) return obj[number[0]] + ' hundred ' + 'eighty';
    return obj[number[0]] + ' hundred ' + obj[number[1]] + 'ty';
  }
}

