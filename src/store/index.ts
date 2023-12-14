import {atom, RecoilState} from 'recoil';
import {Tour} from "../types";

export const tours: RecoilState<Tour[]> = atom({
    key: 'tours',
    default: [] as Tour[],
});

export const toursFavourite: RecoilState<Tour[]> = atom({
    key: "favourites",
    default: [] as Tour[]
})
