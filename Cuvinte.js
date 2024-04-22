package tema14;

import java.util.TreeMap;

public class Cuvinte {
	
	public static TreeMap<String, Integer> numaraCuvinte(String[] cuvinte) {
        TreeMap<String, Integer> mapaNumarCuvinte = new TreeMap<>();
        
        for (String cuvant : cuvinte) {
            
            String cuvantMic = cuvant.toLowerCase();
            
            mapaNumarCuvinte.put(cuvantMic, mapaNumarCuvinte.getOrDefault(cuvantMic, 0) + 1);
        }
        
        return mapaNumarCuvinte;
    }

	public static void main(String[] args) {
		
		 String[] cuvinte = {"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"};
	        TreeMap<String, Integer> mapaNumarCuvinte = numaraCuvinte(cuvinte);
	       
	        System.out.println(mapaNumarCuvinte);

	}

}
