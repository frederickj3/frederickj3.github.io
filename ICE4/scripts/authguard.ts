"use strict";
( function(){

    let protected_routes : string[] = ["contact-list"]

    if (protected_routes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
})();