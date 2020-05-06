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

// resize
this.addEventListener( "resize", e => document.body.style.backgroundColor = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )` );

// scroll

// select

// dblclick
document.querySelectorAll( "img" ).forEach( image =>
{
    image.addEventListener(  "dblclick" ,e => image.style.borderRadius = `${ Math.floor( Math.random()*100 ) + 1 }%` );
} );