import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Subdomain, SubdomainVariables } from '../../types/Subdomain';

export const MUTATION = gql`
    mutation Subdomain($id: ID!, $name: String!, $token: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            createSubDomain(id: $id, name: $name) {
                id
                subdomains
            }
        }
    }
`;

export const useAddSubdomainMutation = () => useMutation<Subdomain, SubdomainVariables>(MUTATION);
