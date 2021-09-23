import { writable,readable } from 'svelte/store';

export const content = writable([{name:'The person is good',id:1},
                                {name:'The person is bad',id:2}]);
 export const newcontent = writable([]);
 export const oldcontent = writable([]);