package tema14;

import java.util.HashSet;

public class Vocale {
	public static boolean containsAllVowels(String str) {
		HashSet<Character> v = new HashSet<>();
		v.add('a');
		v.add('e');
		v.add('i');
		v.add('o');
		v.add('u');
		
		for (char n : str.toCharArray()) {
			if (v.contains(n)) {
				v.remove(n);
			}
		}
		return v.isEmpty();
	}

	public static void main(String[] args) {
		
		System.out.println(containsAllVowels("The quick brown fox jumps over the lazy dog")); 
        System.out.println(containsAllVowels("Hello, World!"));
		
	}

}
