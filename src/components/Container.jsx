import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 1435px) {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
    }
`;