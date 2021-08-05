import { gql } from 'apollo-angular';

export class Queries {

    public static get GET_BOXES() {
       return gql`{
                boxes(openable: true, free: false, purchasable: true) {
                edges {
                    node {
                        id,
                        type,
                        free,
                        price,
                        currency,
                        name,
                        description,
                        openable,
                        iconUrl
                    }
                }
                pageInfo {
                    hasNextPage,
                    hasPreviousPage
                }
            }
        }` 
    };

    public static GET_BOX_BY_ID(id: string) {
        return gql`{
            box(id: "${id}") {
                id,
                name,
                description,
                iconUrl,
                price,
                currency,
                slots {
                    id,
                    rate,
                    itemId,
                    item {
                        id,
                        name,
                        value,
                        iconUrl
                    }
                }
            }
         }` 
     };

}
