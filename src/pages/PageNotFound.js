import page from "../assets/yes.png"

export const PageNotFound = () => {
    return (
     <main>
       <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700  font-bold my-10 dark:text-white"> Oops! </p>
          <img className="rounded max-w-lg" src={page} alt="Page not found"/>
        </div>
        <div>
          
        </div>
       </section>
     </main>
    )
  }
  
  