<!-- Footer -->
<footer id="footer" class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6 order-md-last"> <!-- Formulaire de contact à droite -->
                <h4 id="contact">Contactez-moi</h4>
                <form action="contact.php" method="POST">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nom</label>
                        <input type="text" class="form-control" name="nom" placeholder="Votre nom" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Adresse e-mail</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="exemple@domaine.com" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="5" placeholder="Votre message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
            <div class="col-md-6"> <!-- Contenu à gauche -->
                <h4>Réseaux sociaux</h4>
                <ul id="social-networks">
                    <li>
                        <a class="link" href="https://github.com/cedric-mc" target="_blank">
                            <img class="p-img" src="img/github.png" alt="github"> GitHub
                        </a>
                    </li>
                    <li>
                        <a class="link" href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank">
                            <img class="p-img" src="img/linkedin.png" alt="linkedin"> Linkedin
                        </a>
                    </li>
                </ul>
                <!--<h4><a class="link" href="mentions-legales.php">Mentions légales</a></h4>-->
                <br>
                <!-- <p>Vous pouvez trouver la documentation du site qui est en français <a href="https://cedric-mc.github.io">ici</a>. 👈</p> -->
                <br>
                <p>© par Cédric Mariya Constantine</p>
            </div>
        </div>
    </div>
</footer>
