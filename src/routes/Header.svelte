<script>
    import { time } from "$lib/stores.js";
    import Selector from "$lib/header/Selector.svelte";

    const formatter = new Intl.DateTimeFormat('ko', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour12: false, hour: 'numeric', minute: '2-digit', second: '2-digit'
    });
</script>

<nav class="navbar sticky-top app-header">

    <div class="datetime">{formatter.format($time)}</div>
    
    <div class="container row">
        <!-- <div class="col-1 header-cols">
            <i class="title fa-solid fa-rectangle-list"></i>
        </div> -->
        
        <div class="col-6 header-cols">
            <Selector />
            <!-- <a class="nav-link dropdown-toggle" href="#" role="button" 
            data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sodfsd safsa fsa fsa fsafdsa fsa fdasa fsa fsa fdsaf samething else here dasf dasf asfsa fsaf as</a></li>
              </ul> -->


            <!-- <select 
                class="form-select" 
                aria-label="Default select example"
            >
                <option class="option" selected>Open this select menu</option>
                <option class="option" value="1">One</option>
                <option class="option" value="2">Two</option>
                <option class="option" value="3">Three</option>
            </select> -->
        </div>

        <div class="col-1"></div>

        <div class="col-5 header-cols">
            <div class="input-group">
                <span class="input-group-text">
                    <i class="fa-solid fa-magnifying-glass search"></i>
                </span>
                <input type="text" class="form-control search" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>

    </div>

</nav>

<style>

    /* div {
        border: 1px solid red;
    } */

    .container {
        margin: 0px;
        padding-right: 0px;
    }



    .header-cols {
        padding: 0px;
    }

    .input-group-text {
        border: none;
        border-bottom: 1px solid #efe;
        padding-right: 0;
        background-color: white;
    }
    .search {
        border: none;
        border-bottom: 1px solid #efe;
    }
    .search:focus {
        box-shadow: none;
        border-bottom: 1px solid #ddd;
    }
    i.search {
        color: #888;
    }

    .datetime {
        padding: 0 0 0 1em;
        font-size: 0.7em;
        color: #888;
    }

</style>