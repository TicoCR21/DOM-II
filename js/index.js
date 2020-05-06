// mouseover
document.querySelector( "body" ).addEventListener( "mouseover", e =>
{
    document.querySelectorAll( "h2" ).forEach( h2 => h2.style.color = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )` );
} );

// keydown
document.querySelector( "body" ).addEventListener( "keydown", e => document.querySelector( ".logo-heading" ).style.color = "blue" );

// wheel
document.querySelector( "body" ).addEventListener( "wheel", function(e)
{
    document.querySelectorAll( "p" ).forEach( x =>
    {
        e.preventDefault();
        x.addEventListener(  "wheel" ,e => x.style.color = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )` )
    } );
} );
    
// drag / drop
document.querySelectorAll( "img" ).forEach( image =>
{
    image.addEventListener(  "drag" ,e => image.style.border = "5px solid black" );
} );

// load
this.addEventListener( "load", e => alert( "Welcome To The FUN Bus!!!" ) );

// focus
document.querySelector( "#t" ).addEventListener( "focus", function( e )
{
    this.style.backgroundColor = "red";
} );

// resize
this.addEventListener( "resize", e => document.body.style.backgroundColor = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )` );

// scroll
this.addEventListener( "scroll", function( e )
{
    document.querySelectorAll( "p" ).forEach( function( p )
    {
        p.style.backgroundColor = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )`;
    } );
} );


// select
document.querySelector( "#t" ).addEventListener( "select", function( e )
{
    document.querySelectorAll( "h4" ).forEach( function( h4 )
    {
        h4.style.fontSize = "2rem";
        h4.style.color = "blue";
    } );
} );


// dblclick
document.querySelectorAll( "img" ).forEach( image =>
{
    image.addEventListener(  "dblclick" ,e => image.style.borderRadius = `${ Math.floor( Math.random()*100 ) + 1 }%` );
} );


// Prevent Default Anchor Tags
document.querySelectorAll( "a" ).forEach( a => 
{
        a.addEventListener( "click", e =>
        {
            e.preventDefault();
            a.style.color = "red";
        } );
} );