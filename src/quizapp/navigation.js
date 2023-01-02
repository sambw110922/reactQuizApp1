
//  The main navigation.
function MainNavigation(props) {

  return (

    <nav>
        <a href="./">
            <h1>{ props.theAppName }</h1>
        </a>
        <p>{ props.theAppTagline }</p>
    </nav>

  );

}

export { MainNavigation }