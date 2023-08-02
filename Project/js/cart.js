function showUserCarts(){
    var dt = JSON.parse(localStorage.getItem('cart'));
    var content = document.getElementById('content')
    for (var i = 0; i < dt.length; i++) {
        content.innerHTML += `<div class="project-card">
                                    <div class="project-image">
                                        <img src="${dt[i].thumbnail}" />
                                    </div>
                                    <div class="project-info">
                                        <p class="project-category">${dt[i].brand}</p>
                                        <strong class="project-title">
                                            <span>${dt[i].title}</span>
                                            <span>${dt[i].price} $</span>
                                        </strong>
                                    </div>
                                </div>
                            
                            `
        
    }

}