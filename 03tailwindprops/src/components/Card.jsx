
function Card ({username}) {
return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://staticg.sportskeeda.com/editor/2022/09/e4ec8-16639485644227-1920.jpg" alt="" width="384" height="512"></img>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
            <p className="text-lg font-medium">
            Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.
            </p>
        </blockquote>
        <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            {username || 'Hitesh'}            
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
            </div>
        </figcaption>
        </div>
        </figure>
        </div>
    )
}

export default Card