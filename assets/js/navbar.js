const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container py-2">
		<a class="navbar-brand" href="https://gemportfolio.github.io/affiliatedafisi">
			<!--span><img src="./assets/img/logo.png"></span-->
			Affiliatedafisi
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-0 ms-auto">
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="#services">Our Services</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="#testimonials">Testimonials</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link-btn lazy-el" href="#ebooks">
						Buy My eBooks
						<i class="bi bi-cart ps-1"></i>
					</a>
				</li>
				<div class="d-flex">
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://facebook.com/Affiliatedafisi/">
							<i class="bi bi-facebook"></i>
						</a>
					</li>
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://www.instagram.com/officialafisiblessing/">
							<i class="bi bi-instagram"></i>
						</a>
					</li>
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://x.com/BlessingAfisi?t=tcPM93JPFxD7874po8uMzw&s=09">
							<i class="bi bi-twitter-x"></i>
						</a>
					</li>
				</div>
			</ul>
		</div>
	</div>
    `;


   
   
   
   
   