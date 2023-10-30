function Jumbotron(){
    return(
        <main className="jumbotron py-5" >
           <div className={" d-flex container row justify-content-center mx-auto py-5 my-5"}>
               <section className={"col"}>
                   <h1 className="display-2">Life happens. <br />Coffee helps.</h1>
                   <hr className="my-4" />
                   <p className="lead">Spoon, decaffeinated sugar dark cup cortado carajillo coffee foam aftertaste black. Cup, single shot caramelization a aroma whipped seasonal. Cream, macchiato.Half and half aroma, fair trade froth siphon iced macchiato. Aged doppio redeye aromatic mocha id breve.</p>
                   {/*<aside className={"d-flex justify-content-center w-100 pt-4"}>*/}
                   <a className={"btn btn-light mt-5"} href={'google.com'}>Learn more</a>
                   {/*</aside>*/}
               </section>
               <img src={require('../CasualCoffee.png')}  alt={"Casual Coffee"} className="col-6"/>
           </div>
        </main>
    )
}

export default Jumbotron;