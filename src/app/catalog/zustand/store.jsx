import { create } from 'zustand'

const useStore = create((set) => ({
        perpage: 0,
        pagi : 1,
        search : '',
        oppen : '',
        txt : '',
        idd :0,
        selectIt :[],
        selectIt2 :0,
        user1 :'',
        user5 :'',
        // selectt : [''],
        // hertnum: () => set((state) => ({ bears: state.bears + 1 })),
        // hertnum: () => set({ her: 0 }),
        updateUser: (newperpage) => set({ perpage: newperpage}),
        updateUser2: (newpagi) => set({pagi : newpagi}),
        updateUser3: (newse) => set({ search : newse}),
        updateUser4: (newselectt) => set({ selectt : newselectt}),
        updateUser5: (newoppen , newtxt) => set({ oppen : newoppen ,txt : newtxt}),
        updateUser6: (newidd) => set({ idd : newidd}),
        updateUser7: (newselectIt) => set({ selectIt: newselectIt }),
        updateUser8: (newselectIt2) => set({ selectIt2: newselectIt2 }),
        updateUser9: (newuser1) => set({ user1: newuser1})
}))
export default useStore
