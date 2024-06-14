import { computed, onMounted } from 'vue';
import { usePartsStore } from '../stores/partsStrore';



export default function useSearch(searchTerm) {
  const partsStrore = usePartsStore();
  partsStrore.getParts();
  
  const allParts = computed(() => partsStrore.parts 
  ? [...partsStrore.parts.heads, ...partsStrore.parts.arms, ...partsStrore.parts.torsos, ...partsStrore.parts.bases] 
  : []);

  const results = computed(() => {
    let searchResults;
    if (!searchTerm.value) searchResults = allParts.value;
    else {
      const lowerTerm = searchTerm.value.toLowerCase();
      searchResults = allParts.value.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    return [...searchResults];
  });

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results };
}
