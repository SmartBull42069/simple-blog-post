var postSize=document.querySelectorAll(".post")

var yes=0

var changeSize=document.querySelectorAll(".change")
for (let item of postSize) {
    let post=item.classList[0]
    console.log($(`.${post}`),"where")
    $(`.${post}`).on("click",()=>{
        $(`.${post}-post`).addClass("hidden")
        // $(`.${post}-post`).addClass("hidden")
        $(`.${post}-change`).removeClass("hidden")
        var yes=1
    })}
    
    