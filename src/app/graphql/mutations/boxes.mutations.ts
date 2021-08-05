import { gql } from 'apollo-angular';

export class Mutations {

    public static get OPEN_BOX() {
        return gql`mutation openBox($boxId: ID!, $amount: Int) {
                openBox(input: { boxId: $boxId, amount: $amount }) {
                    boxOpenings {
                        id,
                        itemValue,
                        itemVariantId,
                        itemVariant {
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
