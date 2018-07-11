// See http://cryptopals.com/

'use strict';

function hexToBuffer(input) {
	// Manual:
	// const bytes = [];
	// for (let i = 0; i < input.length; i += 2) {
	//  	const byte = Number.parseInt(input.substring(i, i + 2), 16);
	//  	bytes.push(byte);
	// }
	//
	// return Buffer.from(bytes);
	return Buffer.from(input, 'hex');
}

function xorBuffers(buffer1, buffer2) {
	if (buffer1.length !== buffer2.length) {
		throw new Error('Must be same length');
	}

	const result = Buffer.alloc(buffer1.length);
	for (const pair of buffer1.entries()) {
		result[pair[0]] = pair[1] ^ buffer2[pair[0]];
	}
	return result;
}

function topBytes(buffer) {
	const map = {};
	for (const byte of buffer.values()) {
		map[byte] = (map[byte] || 0) + 1;
	}

}


// Challenge 1
const challenge1 = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
console.log(hexToBuffer(challenge1).toString('base64'));

// Challenge 2
console.log(xorBuffers(hexToBuffer('1c0111001f010100061a024b53535009181c'), hexToBuffer('686974207468652062756c6c277320657965')).toString('hex'));

// Challenge 3
const challenge3 = hexToBuffer('1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736');
/// 1. Build a reasonable good frequency table: Actually, don't. We have one already given :)
const targetOrdered = 'ETAOIN SHRDLU';
/// 2. For each possible character: XOR the text against it, and then order the letters by frequency. Compare until we have one that looks reasonably close to the given one.


