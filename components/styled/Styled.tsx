import  { createGlobalStyle } from 'styled-components'

type themes = {
    theme: {
        body: string
    }
}

const Styled = createGlobalStyle `
    body{
        background-color: ${({theme}: themes)=>theme.body}
    }

    .page-loader{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .page-loader .fa{
        font-size: 5rem;
        color: #ccc;
    }

    @media(min-width: 35em){
        .container{
            width: min(120rem,90vw);
            margin-inline: auto;
        }
    }

    @media(max-width: 35em){

            // .rsis-container {
            //   // do something
            // }

          

            .rsis-image {
              background-size: cover !important;
              background-position: center!important;
            }
          
    }


`

export default Styled