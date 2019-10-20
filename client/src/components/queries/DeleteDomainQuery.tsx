import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { DeleteDomain, DeleteDomainVariables } from "../../types/DeleteDomain";

export const MUTATION = gql`
    mutation DeleteDomain($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteDomain(id: $id) {
                id
                subdomains
            }
        }
    }
`;

export const useDeleteDomainMutation = () => useMutation<DeleteDomain, DeleteDomainVariables>(MUTATION);
