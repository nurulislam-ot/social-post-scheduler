import { atom } from "jotai"
import { POST_ON_CONSTANT, type POST_ON } from "../types/post"

type PlatformStore = {
  activePlatform: POST_ON
  selectedPlatform: POST_ON[]
}

export const platformAtom = atom<PlatformStore>({
  activePlatform: POST_ON_CONSTANT.FACEBOOK,
  selectedPlatform: [POST_ON_CONSTANT.FACEBOOK, POST_ON_CONSTANT.TWITTER],
})

export const setActivePlatformAtom = atom(null, (get, set, update: POST_ON) => {
  set(platformAtom, {
    selectedPlatform: [...get(platformAtom).selectedPlatform, update],
    activePlatform: update,
  })
})
