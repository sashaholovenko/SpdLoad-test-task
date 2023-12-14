
export interface RocketsRequest {
        rockets: Tour[]
}
export interface Tour {
    __typename: string
    name: string
    id: string
    description: string
}
export interface TourItemProps{
    tour: Tour,
    page: string
    index: number
}