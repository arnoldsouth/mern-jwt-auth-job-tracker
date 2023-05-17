import styled from 'styled-components'

const Wrapper = styled.section`
    border-radius: var(--borderRadius);
    width: 100%;
    background: var(--white);

    padding: 3rem 2rem 4rem;
    /* box-shadow: var(--shadow-2); */
    h3 {
        margin-top: 0;
    }

    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;

    .form {
        width: 100%;
        max-width: 100%;
    }
    .form-input,
    .form-select,
    .btn-block {
        height: 35px;
    }
    .form-row {
        margin-bottom: 0;
    }
    .form-center {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 1rem;
        row-gap: 0.5rem;
    }
    h5 {
        font-weight: 700;
    }
    .btn-block {
        align-self: end;
        margin-top: 1rem;
    }
    @media (min-width: 768px) {
        .form-center {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 992px) {
        .form-center {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .btn-block {
            margin-top: 0;
        }
    }
`

export default Wrapper
