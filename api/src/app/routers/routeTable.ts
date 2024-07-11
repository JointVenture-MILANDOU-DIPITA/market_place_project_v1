import { PORT } from "@src/secret"
import { signup ,login,logout,getUser, updateUserInfo, deleteUser, getUsers} from "@src/app/controllers/auth"
import { confirmEmail } from "@src/app/controllers/confirmEmail";
import { isAuthenticated,isAdmin } from "@src/app/middlewares/auth";
import { deleteOrder, getOrderDetails, getOrders } from "../controllers/orders";
import { createProduct, deleteProduct, updateProduct } from "../controllers/products";

var RouteTable = {
    "/":`http://localhost:${PORT}/api/market_place/v1`,
    "sub":{
        "/auth":{
            "/signup" : {
                "POST":signup
            },
            "/login" : {
                "POST":login
            },
            "/logout" : {
                "POST":logout
            },
            "/confirm-email":{
                "GET": confirmEmail
            }
        },
        "/user":{
            "/":{
                "GET": [isAuthenticated,getUser],
            },
            "/profile":{
                ":id":{
                    "PUT":[isAuthenticated, updateUserInfo],
                }
            }
        },
        "/admin":{
                "/user":{
                    ":id":{
                        "DELETE":[isAdmin, deleteUser],
                    }
                },
                "/users":{
                    "GET": [isAdmin,getUsers]
                },
                "/product":{
                    "/":{
                        "POST":[isAdmin, createProduct],
                    },
                    "/profile":{
                        ":id":{
                            "PUT":[isAdmin, updateProduct],
                        }
                    },
                    ":id":{
                        "DELETE":[isAdmin, deleteProduct]
                    }
                },
                "/orders":{
                    "/":{
                    "GET": [isAdmin,getOrders],
                },
                "/order":{
                    ":id":{
                        "DELETE": [isAdmin, deleteOrder],
                    }
                },
                "/orderDetails":{
                    ":id":{
                        "GET": [isAdmin, getOrderDetails],
                    }
                }
            }

        },
        
        "/shop":{

        },
        
        "/admin/products":{

        },
        "/create-payment-session":{

        },
    }
};