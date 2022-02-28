-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 31 Juillet 2017 à 15:43
-- Version du serveur :  5.5.51
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `jesuschristtv`
--

-- --------------------------------------------------------

--
-- Structure de la table `actionsocial`
--

CREATE TABLE IF NOT EXISTS `actionsocial` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `action` varchar(150) NOT NULL,
  `jour` date NOT NULL,
  `heure` varchar(5) NOT NULL,
  `pays` varchar(25) NOT NULL,
  `ville` varchar(25) NOT NULL,
  `lieu` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `id_bourse` varchar(16) NOT NULL,
  `id_bourse_` int(11) NOT NULL,
  `bourse` int(7) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `participants` text NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `actionsocial`
--

INSERT INTO `actionsocial` (`_id`, `langue`, `href`, `titre`, `img`, `action`, `jour`, `heure`, `pays`, `ville`, `lieu`, `descr`, `id_bourse`, `id_bourse_`, `bourse`, `ajouteur`, `participants`, `shares`, `likes`, `comments`) VALUES
(1, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!actions-sociales-soutien-chretien-oeuvres-paix-marie=je-suis-une-action-sociale', 'je suis une action sociale', 'DSC_0009 - Copie.JPG', 'Journée organisé en faveur des démunis (ex:sortie à la plage)', '2017-07-04', '18:00', 'france', 'paris', 'champs élysées', 'kh gyg uyuug y y', 'tyFYTtfyJYgUY', 0, 0, 1, '[]', '{}', '{}', '{}');

-- --------------------------------------------------------

--
-- Structure de la table `benevolat`
--

CREATE TABLE IF NOT EXISTS `benevolat` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `_nom` varchar(100) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `action` varchar(50) NOT NULL,
  `debut` date NOT NULL,
  `fin` varchar(25) NOT NULL,
  `pays` varchar(25) NOT NULL,
  `ville` varchar(25) NOT NULL,
  `descr` text NOT NULL,
  `nombre` varchar(16) NOT NULL,
  `responses` text NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `horaires` varchar(255) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `benevolat`
--

INSERT INTO `benevolat` (`_id`, `langue`, `href`, `_nom`, `titre`, `img`, `action`, `debut`, `fin`, `pays`, `ville`, `descr`, `nombre`, `responses`, `ajouteur`, `horaires`) VALUES
(1, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!moisonner-les-ames-benevolat-ong=-tamerconciseau', 'rose croix', ' tamerconciseau', 'Captu_re.PNG', '0', '2017-06-30', '02:02', 'dsccd', 'fvfe', 'dcfvvf', '1', '{"1":["/files/charite/benevolat/1501090318552_cv.pdf","/files/charite/benevolat/1501090318552_dareboost_cgu.pdf"]}', 1, 'dzcdvcfez fze');

-- --------------------------------------------------------

--
-- Structure de la table `bourses`
--

CREATE TABLE IF NOT EXISTS `bourses` (
  `id_` int(11) NOT NULL AUTO_INCREMENT,
  `i_d` varchar(16) NOT NULL,
  `donateurs` text NOT NULL,
  `collecte` int(7) NOT NULL DEFAULT '0',
  `opt` varchar(20) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_`),
  UNIQUE KEY `i_d` (`i_d`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `bourses`
--

INSERT INTO `bourses` (`id_`, `i_d`, `donateurs`, `collecte`, `opt`, `date`) VALUES
(1, 'webmaster', '{"1_1501157827753":"654euros : unique"}', 654, '', '2017-07-27 11:53:00'),
(2, 'oeuvre', '{"1_1501158587514":"300euros : mensuel"}', 300, '', '2017-07-27 11:53:00'),
(3, 'gGFvvybuy67T', '{}', 0, '""', '2017-07-27 12:02:32'),
(4, 'gggg', '{}', 0, '""', '2017-07-27 12:05:54'),
(5, 'hjhqsdv', '{}', 0, '""', '2017-07-27 12:10:20');

-- --------------------------------------------------------

--
-- Structure de la table `charite`
--

CREATE TABLE IF NOT EXISTS `charite` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `action` varchar(150) NOT NULL,
  `jour` date NOT NULL,
  `heure` varchar(5) NOT NULL,
  `pays` varchar(25) NOT NULL,
  `ville` varchar(25) NOT NULL,
  `lieu` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `id_bourse` varchar(16) NOT NULL,
  `id_bourse_` int(11) NOT NULL,
  `bourse` int(7) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `participants` text NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `charite`
--

INSERT INTO `charite` (`_id`, `langue`, `href`, `titre`, `img`, `action`, `jour`, `heure`, `pays`, `ville`, `lieu`, `descr`, `id_bourse`, `id_bourse_`, `bourse`, `ajouteur`, `participants`, `shares`, `likes`, `comments`) VALUES
(1, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=ygb-uygu-u-tut', 'ygb uygu u tut', 'DSC_0004.JPG', 'Don de vêtements', '2017-06-29', '15:18', 'France', 'nice', 'pres de chez moi', 'jhg ygu ygyugu ggu uy', 'jyYGYUbuyG', 0, 0, 1, '[1]', '{}', '{}', '{"1_1501019525664":"dsf fddcfdz ezdf<br>","1_1501020421270":"svvcc  dffddf<br>"}'),
(2, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=je-test-encore-une-entrée', 'je test encore une entrée', 'DSC_0006.JPG', 'ddsq', '2017-06-30', '18:00', 'cote d''ivoire', 'abidjan', 'rue des jardin, devant hayat', 'uk uygyg uy yt fht ufty', 'uybgyYtfvyuFTY', 0, 0, 0, '[]', '{}', '{}', '{}'),
(3, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=aaaaaaaaaa', 'aaaaaaaaaa', 'DSC_0004.JPG', 'bbbbbbbbbbbbbb', '2017-07-28', '04:02', 'ccccccccc', 'dddddddddddddddd', 'eeeeeeeeeeeeeee', '<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>\r\n<p>fffffffffffff f f f ffffffff</p>', 'gGFvvybuy67T', 3, 0, 0, '[]', '{}', '{}', '{}'),
(4, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=aaaaaaaaa', 'aaaaaaaaa', 'DSC_0004.JPG', 'bbbbbbbbbb', '2017-07-28', '02:03', 'cccccccccccccccc', 'ddddddddddddddddd', 'eeeeeeeeeeeeeeeee', '<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>\r\n<p>ffffffffffffffffffffffff &nbsp;f fffffff f</p>', 'gggg', 3, 0, 0, '[]', '{}', '{}', '{}'),
(5, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=aaaaaaaaa', 'aaaaaaaaa', 'DSC_0001.JPG', 'bbbbbbbbb', '2017-07-28', '04:02', 'cccccccccccccccc', 'dddddddddddd', 'eeeeeeeeeeee', '<p>fffffffffffffffffffffffffffffffffff</p>', 'hjhqsdv', 3, 0, 1, '[]', '{}', '{}', '{}');

-- --------------------------------------------------------

--
-- Structure de la table `conversions`
--

CREATE TABLE IF NOT EXISTS `conversions` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `conversions` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `conversions`
--

INSERT INTO `conversions` (`_id`, `langue`, `date`, `href`, `titre`, `conversions`, `descr`, `ajouteur`, `shares`, `likes`, `comments`) VALUES
(1, 'fr', '2017-07-27 17:02:34', 'jétaite-athée-maintenant-je-suis-chrétien', 'jétaite athée maintenant je suis chrétien', 'athée', 'khg uv uy uyvy', 0, '{}', '{}', '{}'),
(2, 'fr', '2017-07-27 17:06:07', 'jétaite-athée-maintenant-je-suis-chrétien', 'jétaite athée maintenant je suis chrétien', 'athée', 'jyuf yt vyu gyu fyty ', 0, '{}', '{}', '{}'),
(3, 'fr', '2017-07-27 17:09:46', 'jétaite-athée-maintenant-je-suis-chrétien', 'jétaite athée maintenant je suis chrétien', 'athée', 'dsf fsgffgd ', 1, '{}', '{"1":"amen"}', '{"1_1501195200435":"sd fdfd<br>"}');

-- --------------------------------------------------------

--
-- Structure de la table `cookied`
--

CREATE TABLE IF NOT EXISTS `cookied` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `token` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=423 ;

--
-- Contenu de la table `cookied`
--

INSERT INTO `cookied` (`id`, `user_id`, `token`) VALUES
(163, 54, 'WFXwr3RoReSQ'),
(219, 57, 'HhLdaVYhaaU5'),
(221, 56, '07YdlPn2OCk7'),
(422, 1, 'TPQsJKp5SC9X');

-- --------------------------------------------------------

--
-- Structure de la table `cp`
--

CREATE TABLE IF NOT EXISTS `cp` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `img` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `participants` text NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `short_descr` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `priere` varchar(50) NOT NULL,
  `priere_` text NOT NULL,
  `heure` varchar(10) NOT NULL,
  `debut` date NOT NULL,
  `fin` date NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `cp`
--

INSERT INTO `cp` (`_id`, `langue`, `href`, `ajouteur`, `titre`, `img`, `status`, `participants`, `shares`, `likes`, `short_descr`, `descr`, `priere`, `priere_`, `heure`, `debut`, `fin`) VALUES
(1, 'fr', 'http://localhost:8080/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde=une-priere', 2, 'une priere', 'DSC_0004.JPG', 1, '[]', '{}', '{}', 'la courte descriptiond de la communauté de priere', 'La kongue description de la communauté de priere', 'qsdqd', 'fdzszfgdz ezf efz', '03:02', '2017-06-17', '2018-06-17'),
(2, 'fr', 'http://localhost:8080/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde=Notre-Dame-du-Rosaire', 2, 'Notre Dame du Rosaire', '', 0, '[]', '{}', '{}', 'dsvfea', 'fdssfbv', 'zdss', 'fdsd', '01:59', '2017-06-10', '2017-06-24'),
(3, 'fr', 'http://localhost:8080/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde=creer-communaute-priereteste-multi', 2, 'teste multi', 'tmp_/cp/DSC_0004.JPG', 1, '[]', '{}', '{}', 'sqq  fdzsdzdf  fdf dz ', '<p>e dzsfzfdf dz dfd sdsd&nbsp;</p>', 'saint-esprit;credo||exemple rajouté||', 'exemple de prière avec le mode multiparty', '04:30', '2017-06-19', '2018-06-19'),
(4, 'fr', 'http://localhost:8080/jesus-christ-foi-chretienne#reteste-pulti', 2, 'reteste pulti', '/imgs/foi/cp/1500484636429_dsc_0004.jpg', 1, '[]', '{}', '{"1":"amen"}', 'dcs fd fdfd d fg', '<p>fd bf gfdfgf fg d gfgf g</p>', 'pater;salut||exemple||', 'exemple de prière avec le mode multiparty', '03:26', '2017-06-19', '2018-06-19');

-- --------------------------------------------------------

--
-- Structure de la table `discussions`
--

CREATE TABLE IF NOT EXISTS `discussions` (
  `id_d` int(11) NOT NULL AUTO_INCREMENT,
  `ajouteur` int(7) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `p` text NOT NULL,
  `comments` text NOT NULL,
  `responses` text NOT NULL,
  `likes` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_d`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `discussions`
--

INSERT INTO `discussions` (`id_d`, `ajouteur`, `titre`, `p`, `comments`, `responses`, `likes`, `date`, `status`) VALUES
(1, 1, 'je suis un exemple de titre de discussion', 'hbuy uy uy bu byub u bub u buy buy  u b uy bu bu uy', '{}', '{}', '{}', '2017-07-28 20:55:48', 0),
(2, 1, 'je suis un exemple de titre de discussion', 'hbuy uy uy bu byub u bub u buy buy  u b uy bu bu uy', '{"1_1501279497414":"dfv fdfdf fg <br>"}', '{}', '{}', '2017-07-28 20:55:48', 0),
(3, 1, 'encore un autre teste dans description', '', '{}', '{}', '{}', '2017-07-28 21:31:26', 0),
(4, 1, 'encore un autre teste dans description', '', '{}', '{}', '{}', '2017-07-28 21:31:26', 0);

-- --------------------------------------------------------

--
-- Structure de la table `films`
--

CREATE TABLE IF NOT EXISTS `films` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `href` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT '{}',
  `shares` text,
  `likes` text,
  `short_descr` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `theme` varchar(50) NOT NULL,
  `theme_` varchar(2) NOT NULL,
  `langue_` varchar(50) NOT NULL,
  `date` varchar(4) NOT NULL,
  `infos` varchar(255) NOT NULL,
  `links` text NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `href` (`href`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `films`
--

INSERT INTO `films` (`_id`, `langue`, `type`, `href`, `title`, `titre`, `auteur`, `ajouteur`, `img`, `shares`, `likes`, `short_descr`, `descr`, `theme`, `theme_`, `langue_`, `date`, `infos`, `links`) VALUES
(1, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=films-series-courts-metrages-chretiens&internaute-donne-film-cinema-serie=le-jeune-messie', 'une tres tres bon film', 'le jeune messie', '{"nom":"je ne connais pas","lien":""}', 2, 'DSC_0006.JPG', '{}', '{}', 'nui hiunhui h', ' kjjiun hiu hiuh', 'jesus', '0', 'cn', '', '{"a":"a"}', '{"buy":"http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-sei","watch":"http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-sei","dls":"http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-sei","news":"sfdsfd"}'),
(2, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=films-series-courts-metrages-chretiens&internaute-donne-film-cinema-serie=kj-ojoi-jioj-', 'h iu', 'kj ojoi jioj ', '{"nom":"yg yig","lien":""}', 1, 'DSC_0006.JPG', '{}', '{}', 'kuj huihui', 'g ygy yu', 'anges', '3', 'es', '2002', '{"qddqs":"sqd"}', '{"buy":"http://localhost:81/phpmyadmin/sql.php?db=jesuschristtv&ta","watch":"http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-","dls":"http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-","news":"zzzzzzzzzzz"}'),
(3, 'fr', 1, 'http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens&amp;internaute-donne-video-religion-chretienne=pere-boodah', 'cest un tres bon predicateur', 'pere boodah', '{"nom":"boodah","lien":""}', 2, 'DSC_0004.JPG', '{}', '{}', 'kjhi hiui uhu ', 'k huihuh uhih hui iu', 'dieu', '2', 'fr', '', '{"a":"a"}', '{"buy":"http://localhost:81/phpmyadmin/sql.php?db=jesuschristtv&ta","watch":"http://localhost:81/phpmyadmin/sql.php?db=jesuschristtv&ta","dls":"http://localhost:81/phpmyadmin/sql.php?db=jesuschristtv&ta","news":"zzzzzzzzzz"}'),
(4, 'fr', 1, 'http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens&amp;internaute-donne-video-religion-chretienne=jesuis-un-exemple', 'jesuis un exemple', 'jesuis un exemple', '{"nom":"jesuis un exemple","lien":""}', 1, 'DSC_0008.JPG', '{}', '{}', 'jesuis un exemple', 'jesuis un exemple', 'marie', '1', 'en', '', '{"d":"d"}', '{"buy":"jesuis un exemple","watch":"jesuis un exemple","dls":"jesuis un exemple","news":"jesuis un exemple"}'),
(8, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=films-series-courts-metrages-chretiens&internaute-donne-film-cinema-serie=teste-multi', 'teste multi', 'teste multi', '{"nom":"sfdsdsfd","lien":""}', 2, '/imgs/foi/films/fr/1500290770006_dsc_0131.jpg', '{}', '{}', 'dsqfdfq', 'ddfbbfd', 'undefined', '3', '', '2002', '{"SFDDFS":"sdfdsf"}', '{"buy":"https://translate.google.com/?hl=fr","watch":"https://translate.google.com/?hl=fr","dls":"https://translate.google.com/?hl=fr","news":"https://translate.google.com/?hl=fr"}');

-- --------------------------------------------------------

--
-- Structure de la table `guerir`
--

CREATE TABLE IF NOT EXISTS `guerir` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ajouteur` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `href` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT '{}',
  `shares` text,
  `likes` text,
  `short_descr` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `theme` varchar(50) NOT NULL,
  `type` enum('image','icone','peinture','anime') NOT NULL,
  `infos` varchar(255) NOT NULL,
  `links` text NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `href` (`href`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Contenu de la table `images`
--

INSERT INTO `images` (`_id`, `href`, `title`, `titre`, `auteur`, `ajouteur`, `img`, `shares`, `likes`, `short_descr`, `descr`, `theme`, `type`, `infos`, `links`) VALUES
(13, 'http://localhost:8080/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-chretiennes&internaute-donne-livre=yu-buytuyt-uyg', 'uybbgyt btfy', 'yu buytuyt uyg', '{"nom":" f","lien":""}', 2, 'DSC_0017.JPG', '{}', '{}', 'hgftyf ytvfv tvry(', 'ytvv fyt yrr', 'a_trouver', 'anime', '{"dfd":"dfs","lien":"exemple1.fr"}', '{"buy":"lien:http://exemple1.fr","dls":"exemple1.fr"}'),
(14, 'http://localhost:8080/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-chretiennes&internaute-donne-livre=jesus-miséricordieux', 'je suis un titre alternatif', 'jesus miséricordieux', '{"nom":"","lien":""}', 1, 'DSC_0014.JPG', '{}', '{}', 'duhqd suy', 'uygbuyt tu', 'a_trouver', 'image', '{}', '{"buy":"http://exemple1.fr","dls":"exemple1.fr"}'),
(15, 'http://localhost:8080/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-chretiennes&internaute-donne-livre=sqdqsd-sqd', 'dsqd', 'sqdqsd sqd', '{"nom":"","lien":""}', 2, 'DSC_0009 - Copie.JPG', '{}', '{"1":"alleluia"}', 'dsd', 'dfssfd', 'a_trouver', 'icone', '{}', '{"files":"C:/fakepath/DSC_0006.JPG","buy":"sqdd","dls":"sqd"}'),
(20, 'http://localhost:8080/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-chretiennes&internaute-donne-image=teste-multi_', 'teste multi', 'teste multi', '{"nom":"fzsfsd","lien":""}', 2, '/imgs/foi/images/1500288202876_dsc_0004.jpg', '{}', '{}', 'fd dsffsd sfd', 'sfd dsfsfd', 'a_trouver', 'icone', '{"sdfds":"fsd"}', '{"buy":"https://translate.google.com/?hl=fr","dls":"https://translate.google.com/?hl=fr","files":["/files/foi/images/1500288202858_dsc_0001.jpg","/files/foi/images/1500288202858_dsc_0004.jpg"]}'),
(22, 'http://localhost:8080/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-chretiennes&internaute-donne-image=teste-multi', 'teste multi', 'teste multi', '{"nom":"aaaaaa","lien":""}', 2, '/imgs/foi/images/1500550555199_dsc_0001.jpg', '{}', '{}', 'h uyg uyuyg uyyu g', 'yy guyg y_ug uyg u gyb', 'a_trouver', 'icone', '{"lien":"ok"}', '{"buy":"https://www.dropbox.com/home","dls":"https://www.dropbox.com/home","files":["/files/foi/images/1500550555186_dsc_0006.jpg","/files/foi/images/1500550555186_dsc_0007.jpg"]}');

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE IF NOT EXISTS `livres` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `href` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT '{}',
  `shares` text,
  `likes` text,
  `imgs` text,
  `short_descr` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `theme` varchar(50) NOT NULL,
  `theme_` varchar(2) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `infos` varchar(255) NOT NULL,
  `links` text NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `href` (`href`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Contenu de la table `livres`
--

INSERT INTO `livres` (`_id`, `langue`, `type`, `href`, `title`, `titre`, `auteur`, `ajouteur`, `img`, `shares`, `likes`, `imgs`, `short_descr`, `descr`, `theme`, `theme_`, `isbn`, `infos`, `links`) VALUES
(6, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=dont-try-this-one', 'JGJYG', 'don''t try this one', '{"nom":"ygyg","lien":""}', 1, 'DSC_0004.JPG', NULL, '{"1":"alleluia"}', 'DSC_0001.JPG,DSC_0004.JPG', 'jygyug', 'yguyg', 'jesus', '0', 'jgyguyg', '', ''),
(7, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=gyubguy-gbuygb yguy', 'hjgbuyguy', 'gyubguy gbuygb yguy', '{"nom":"buygyut","lien":""}', 2, 'DSC_0008.JPG', '{}', '{"1":"alleluia"}', 'DSC_0006.JPG,DSC_0009 - Copie.JPG', 'jhngb', 'gbuygbyu', 'jesus', '0', 'hgbg', '{"ybgg":"hn","a":"a","b":"b"}', '{"buy":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_objects.html","ebook":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_","dls":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schoo"}'),
(9, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=ghfht-hgj-hj', 'hjgbuyguy', 'ghfht hgj hj', '{"nom":"buygyut","lien":""}', 1, 'DSC_0008.JPG', NULL, '{"1":"alleluia"}', 'DSC_0006.JPG,DSC_0009 - Copie.JPG', 'jhngb', 'gbuygbyu', 'dieu', '1', 'hgbg', '{"ybgg":"hn","a":"a","b":"b"}', '{"lien":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_objects.html","ebook":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_","dls":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schoo"}'),
(10, 'fr', 1, '#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=notre-pere', 'La meilleur prière chrétienne du monde', 'Notre Père', '{"nom":"Jésus-Christ","lien":""}', 2, '', NULL, NULL, '', 'vsdsd', '', 'livret', '0', 'undefined', '{"sqd":"dqs"}', '{"buy":"$c_aj_infos_","lien_":"http://localhost:81/phpmyadmin/#PMAURL-0:index.php?db=&table=&server=1&target=&token=d896e36f6e1087a75298c5a95a503f59","lien__":"http://localhost:81/phpmyadmin/#PMAURL-0:index"}'),
(12, 'fr', 1, '#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=le-credo', 'Encore une bonne prière chrétienne du monde', 'Le credo', '{"nom":"Jésus-Christ","lien":""}', 1, '', NULL, NULL, '', 'vsdsd', '', 'adoration', '1', 'undefined', '{"sqd":"dqs"}', '{"lien":"$c_aj_infos_","ebook":"http://localhost:81/phpmyadmin/#PMAURL-0:index.php?db=&table=&server=1&target=&token=d896e36f6e1087a75298c5a95a503f59","lien__":"http://localhost:81/phpmyadmin/#PMAURL-0:index"}'),
(14, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&internaute-donne-livre=fuckyoub!tch', 'hjgbuyguy', 'fuckyoub!tch', '{"nom":"buygyut","lien":""}', 1, 'DSC_0008.JPG', NULL, '{"1":"hosanna"}', 'DSC_0006.JPG,DSC_0009 - Copie.JPG', 'jhngb', 'gbuygbyu', 'marie', '2', 'hgbg', '{"ybgg":"hn","a":"a","b":"b"}', '{"lien":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_objects.html","lien_":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schools.com/js/js_","dls":"file:///C:/Mes%20Sites%20Web/javascript/www.w3schoo"}'),
(15, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=livres-chretiens&internaute-donne-livre=djhg', 'yvftydrt', 'djhg', '{"nom":"ctrdcrtcr","lien":""}', 2, 'DSC_0009 - Copie.JPG', '{}', '{"1":"alleluia"}', '', 'grg gh ggf h gh', ' g t tttr', 'autresjhgb', '19', '654546', '{}', '{"buy":"dfgvvvg","ebook":"gvvgvg","dls":"gfgvvgvd","files":"C:/fakepath/DSC_0006.JPG"}'),
(29, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=livres-chretiens&internaute-donne-livre=teste-multi', 'l''ultime tesre', 'teste multi', '{"nom":"jen suis sur","lien":""}', 2, 'imgs/foi/livres/fr/1500161346014_dsc_0006.jpg', '{}', '{"1":"alleluia"}', '["imgs/foi/livres/fr/1500161346004_dsc_0001.jpg","imgs/foi/livres/fr/1500161346004_dsc_0004.jpg","imgs/foi/livres/fr/1500161346004_dsc_0007.jpg","imgs/foi/livres/fr/1500161346004_dsc_0008.jpg","imgs/foi/livres/fr/1500161346004_dsc_0009 - copie.jpg"]', 'hj jh ih ih i ', 'ih hj ih i hii', 'anges', '3', '8998JDE89EZ', '{}', '{"buy":"zef","ebook":"fr","dls":"fdevfv","files":"C:/fakepath/DSC_0014.JPG"}'),
(30, 'fr', 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!livres-prieres-jesus-christ-anges-ciel-etc=livres-chretiens&internaute-donne-livre=ajout-user', 'teste ajout user', 'ajout user', '{"nom":"giugyb","lien":""}', 2, '/imgs/foi/livres/fr/1500383120294_dsc_0009.jpg', '{}', '{}', '["/imgs/foi/livres/fr/1500383120288_dsc_0015.jpg","/imgs/foi/livres/fr/1500383120288_dsc_0016.jpg","/imgs/foi/livres/fr/1500383120288_dsc_0017.jpg"]', 'sdjh ds bfsdy bsfd ufdsuy', 'u ydcuydv vvuhfuyyyuby  uy u', 'jesus', '0', '76TGG67G66', '{}', '{"buy":"https://www.dropbox.com/home","ebook":"https://www.dropbox.com/home","dls":"https://translate.google.com/?hl=fr","files":"C:/fakepath/50c.wpl"}');

-- --------------------------------------------------------

--
-- Structure de la table `miracles`
--

CREATE TABLE IF NOT EXISTS `miracles` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `miracles` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `miracles`
--

INSERT INTO `miracles` (`_id`, `langue`, `date`, `href`, `titre`, `miracles`, `descr`, `ajouteur`, `shares`, `likes`, `comments`) VALUES
(1, 'fr', '0000-00-00 00:00:00', 'http://localhost:8080/dieu-le-pere-esperance-chretienne=jesus-m-a-sauvé-des-ténèbres', 'jesus m''a sauvé des ténèbres', 'foi', 'fddcdscdcs', 1, '{}', '{"1":"hosanna"}', '{"1_1501195051333":"dqdf fd fdgfdf<br>"}');

-- --------------------------------------------------------

--
-- Structure de la table `murs`
--

CREATE TABLE IF NOT EXISTS `murs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(4) NOT NULL,
  `mur` varchar(15) NOT NULL,
  `type` varchar(15) NOT NULL,
  `href` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `texte` text NOT NULL,
  `mult` varchar(255) NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  `ajouteur` int(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=33 ;

--
-- Contenu de la table `murs`
--

INSERT INTO `murs` (`id`, `langue`, `mur`, `type`, `href`, `titre`, `texte`, `mult`, `shares`, `likes`, `comments`, `ajouteur`) VALUES
(7, 'fr', 'foi', 'priere', 'u-hig-yig-36-20-7-6-2017', '', '<p>u hig yig uyg uy yg u</p>', '', '{}', '{}', '{}', 1),
(9, 'fr', 'foi', 'priere', 'df-dfdf-dgf-31-21-7-6-2017', '', '<p>df dfdf <span style=&quotes;color: #ff9900;&quotes;>dgf</span> h hf hf<img src=&quotes;apis/tinymce/js/tinymce/plugins/emoticons/img/smiley-innocent.gif&quotes; alt=&quotes;innocent&quotes; /></p>', '', '{}', '{}', '{}', 1),
(10, 'fr', 'foi', 'image', '-undefined-undefined-21-22-7-6-2017', 'ssds ssd  sd', 's sds sd sd sd sd ds', 'tmp9/DSC_0006.JPG', '{}', '{}', '{}', 1),
(11, 'fr', 'foi', 'audio', 'x-undefined-undefined-23-22-7-6-2017', 'xcxcxddf fd fd df ', 'dffd d ddf ', 'tmp9/DSC_0004.JPG', '{}', '{}', '{}', 1),
(12, 'fr', 'foi', 'video', 'c-csdsd-scdscds-36-22-7-6-2017', 'c csdsd scdscds', 'd sc dsds  dsds', 'tmp9/DSC_0001.JPG', '{}', '{}', '{}', 1),
(13, 'fr', 'foi', 'priere', 'sdcdcsdsc-fdfd-vfsc-22-23-7-6-2017', '', '<p>sdcdcsdsc fdfd vfsc ds</p>', '', '{}', '{}', '{}', 1),
(14, 'fr', 'foi', 'priere', 'vd-v- fvf-23-23-7-6-2017', '', '<p>vd v &nbsp;fvf &nbsp;f</p>', '', '{}', '{}', '{}', 1),
(15, 'fr', 'foi', 'priere', 'dsds- ds-dsf-25-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(16, 'fr', 'foi', 'priere', 'dsds- ds-dsf-25-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(17, 'fr', 'foi', 'priere', 'dsds- ds-dsf-26-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(18, 'fr', 'foi', 'priere', 'dsds- ds-dsf-27-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(19, 'fr', 'foi', 'priere', 'dsds- ds-dsf-28-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(20, 'fr', 'foi', 'priere', 'dsds- ds-dsf-28-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(21, 'fr', 'foi', 'priere', 'dsds- ds-dsf-29-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(22, 'fr', 'foi', 'priere', 'dsds- ds-dsf-30-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(23, 'fr', 'foi', 'priere', 'dsds- ds-dsf-30-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(24, 'fr', 'foi', 'priere', 'dsds- ds-dsf-30-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(25, 'fr', 'foi', 'priere', 'dsds- ds-dsf-30-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(26, 'fr', 'foi', 'priere', 'dsds- ds-dsf-30-23-7-6-2017', '', '<p>dsds &nbsp;ds dsf sd f</p>', '', '{}', '{}', '{}', 1),
(27, 'fr', 'charite', 'solidarite', 'soupe-miso-pour-29-13-10-6-2017', '', '', '', '{}', '{}', '{}', 1),
(28, 'fr', 'charite', 'solidarite', 'qdcsdf--d-36-13-10-6-2017', '', '', '', '{}', '{}', '{}', 1),
(29, 'fr', 'esperance', 'audio', '', '', '', '', '{}', '{}', '{}', 1),
(30, 'fr', 'foi', 'priere', 'tdtyfguub-uygyguy-gvhgv-49-14-18-6-2017', '', '<p>tdtyfguub <span style=&quotes;color: #ff6600; background-color: #00ff00;&quotes;>uygyguy gvhgv j</span></p>', '', '{}', '{}', '{}', 1),
(31, 'fr', 'foi', 'priere', 'sdfsdsd-sfd-dsf-56-14-18-6-2017', '', '<p>sdfsdsd sfd dsf sfd s <span style=&quotes;color: #ff6600;&quotes;>sfd</span></p>', '', '{}', '{}', '{}', 1),
(32, 'fr', 'foi', 'priere', 'qsdqsddd-fd-sfd-10-19-19-6-2017', '', '<p>qsdqsddd fd sfd sdsf &nbsp;fsd</p>', '', '{}', '{}', '{}', 1);

-- --------------------------------------------------------

--
-- Structure de la table `musics`
--

CREATE TABLE IF NOT EXISTS `musics` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `titre_` varchar(100) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT '{}',
  `shares` text,
  `likes` text,
  `imgs` varchar(255) DEFAULT NULL,
  `short_descr` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `theme` varchar(50) NOT NULL,
  `theme_` varchar(2) NOT NULL,
  `zone` varchar(100) NOT NULL,
  `zone_` varchar(2) NOT NULL,
  `langue` varchar(2) NOT NULL,
  `infos` varchar(255) NOT NULL,
  `links` text NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `href` (`href`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `musics`
--

INSERT INTO `musics` (`_id`, `type`, `href`, `titre`, `titre_`, `auteur`, `ajouteur`, `img`, `shares`, `likes`, `imgs`, `short_descr`, `descr`, `theme`, `theme_`, `zone`, `zone_`, `langue`, `infos`, `links`) VALUES
(1, 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon=booba-92i', 'booba 92i', 'Aboubacar', '{"nom":"booba 92i","lien":""}', 2, 'DSC_0008.JPG', '{}', '{"1":"hosanna"}', 'DSC_0004.JPG,DSC_0006.JPG,DSC_0007.JPG,DSC_0008.JPG,DSC_0009 - Copie.JPG', 'kuhuy uiyyui', 'yg uygy iyg yguy guyg', 'rap', '2', 'asieO', '2', 'cn', '{"s":"s"}', '{"buy":"http://exemple1.fr","listen":"exemple1.fr","dls":"http://dls.fr","news":"http://exemple1.fr","files":"C:fakepathDSC_0006.JPG"}'),
(3, 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon=arme-silencieuse', 'arme silencieuse', 'testemoipetit', '{"nom":"booba 92i","lien":""}', 1, 'DSC_0009 - Copie.JPG', '{}', '{}', 'DSC_0004.JPG,DSC_0006.JPG', 'jhgy ugyu èuy gyugy', 'uyg yug yu yu tyu yy i', 'gospel', '1', 'occident', '1', 'fr', '{"a":"a"}', '{"buy":"view-source:http://localhost:8080/fill_file/images_","listen":"http://localhost:81/phpmyadmin/sql.php?server=1&db","dls":"http://localhost:8080/jesus-christ-foi-chretienne#","files":"C:fakepathDSC_0007.JPG","news":"http://localhost:8080/jesus-christ-foi-chretienne#"}'),
(4, 1, 'http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon=les-meilleurs-partent-en-prmier', 'les meilleurs partent en prmier', '', '{"nom":"booba 92i","lien":""}', 2, 'DSC_0006.JPG', '{}', '{}', '', 'hhy gy ugyg', 'y guguygyugy g', 'intersescion', '0', 'afriqueO', '0', 'fr', '{"a":"a"}', '{"buy":"http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon","listen":"http://localhost:81/phpmyadmin/sql.php?server=1&","dls":"aaaaaaaa","news":"http://localhost:81/phpmyadmin/sql.php?server=1&","files":"C:fakepathDSC_0006.JPG"}'),
(5, 1, 'http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon=nirvana', 'nirvana', '', '{"nom":"doc gyneco","lien":""}', 1, 'DSC_0006.JPG', '{}', '{}', '', 'hguyg ygyug uyg ', 'uut fty ft fy tfy', 'intersescion', '0', 'occident', '1', 'en', '{"a":"a"}', '{"buy":"http://localhost:81/phpmyadmin/sql.php?server=1&","listen":"http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes&amp;internaute-donne-chancon","dls":"aaaaaaaaaa","files":"C:fakepathDSC_0004.JPG","news":"zzzzzzzzzz"}'),
(7, 0, 'http://localhost:8080/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=artistes-chretiens&internaute-donne-artiste-musical=teste-multi', 'teste multi', 'testemoipetit', '', 2, '/imgs/foi/musics/en/1500289745318_dsc_0033.jpg', '{}', '{}', '["/imgs/foi/musics/en/1500289745318_dsc_0004.jpg","/imgs/foi/musics/en/1500289745318_dsc_0006.jpg","/imgs/foi/musics/en/1500289745318_dsc_0015.jpg","/imgs/foi/musics/en/1500289745318_dsc_0016.jpg","/imgs/foi/musics/en/1500289745318_dsc_0017.jpg"]', 'fsddfs', 'h uu vvy', 'reagge', '0', 'occident', '1', 'en', '{"qdqsd":"qsd"}', '{"buy":"https://translate.google.com/?hl=fr","listen":"https://translate.google.com/?hl=fr","dls":"https://translate.google.com/?hl=fr","news":"https://translate.google.com/?hl=fr","files":["/files/foi/musics/1500289745313_dsc_0026.jpg"]}');

-- --------------------------------------------------------

--
-- Structure de la table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `head_object_string` varchar(255) NOT NULL DEFAULT '{}',
  `body_object_string` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `pages`
--

INSERT INTO `pages` (`id`, `username`, `head_object_string`, `body_object_string`) VALUES
(1, 'foi', '{"title":0,"script":1,"style":1,"meta":0}', '{"tpls":1,"menu_h1":0,"accueil_h2":0,"accueil_h3s":0,"accueil_img":0,"accueil_video":0,"accueil_audio":0,"accueil_lien0":0,"accueil_lien1":0,"accueil_lien2":0,"accueil_lien3":0,"accueil_text":1,"livres_h2":0,"livres_h_img":0,"livres_video":0,"livres_text":1,"livres_h3":0,"livres_button_0":0,"livres_button_1":0,"livres__hs":0,"livres__btns":1,"livres__s":0,"livres__hs_":0,"livres__btns_":1,"livres__s_":0,"livres__themes":0,"images_h2":0,"images_h_img":0,"images_video":0,"images_text":1,"images_h3":0,"images_button_0":0,"images__hs":0,"images__btns":1,"images__s":0,"images__hs_":0,"images__btns_":1,"images__s_":0,"images__themes":0,"musics_h2":0,"musics_h_img":0,"musics_video":0,"musics_text":1,"musics_h3":0,"musics_button_0":0,"musics_button_1":0,"musics__hs":0,"musics__btns":1,"musics__s":0,"musics__sbis":0,"musics__i":0,"musics__i_":0,"musics__hs_":0,"musics__btns_":1,"musics__s_":0,"musics__themes":0,"films_h2":0,"films_h_img":0,"films_video":0,"films_text":1,"films_h3":0,"films_button_0":0,"films_button_1":0,"films__hs":0,"films__btns":1,"films__s":0,"films__hs_":0,"films__btns_":1,"films__themes":0,"cp_form":1,"cp_accueil":1,"cp_badges_0":0,"cp_badges_1":0,"prieres_buttons":0,"cp_tooltip":1,"prieres_img":0,"prieres_form":1,"rc_accueil":1,"rc_ul_titles":0,"rc_badges_0":0,"rc_badges_1":0,"rc_form":1,"rencontres_h2":0,"rencontres_lien":0,"rencontres_buttons":0,"rencontres_tooltip":1,"rencontres_img":0,"rencontres_form":1,"menu_gauche":1,"menu_droit":0,"modals_direct":1,"modals_save":1,"modals_droite":1}'),
(2, 'accueil', '{"title":0,"script":1,"style":1,"meta":0}', '{"form_1":1,"form_2":0,"flashes":1,"signedin":0}'),
(3, 'all', '{}', '{"menu":1,"menu_h1":0,"textes":1}'),
(4, '_all', '{}', '{"menu_gauche":1,"buttons_log":1,"bar_top":1}'),
(5, 'charite', '{"title":0,"script":1,"style":1,"meta":0}', '{"tpls":1,"menu_h1":0,"accueil_h2":0,"accueil_h3s":0,"accueil_img":0,"accueil_video":0,"accueil_audio":0,"accueil_lien0":0,"accueil_lien1":0,"accueil_lien2":0,"accueil_lien3":0,"accueil_text":1,"forms":1,"forms_":1,"oc_badges_0":0,"oc_badges_1":0,"s_badges_0":0,"s_badges_1":0,"as_badges_0":0,"as_badges_1":0,"b_badges_0":0,"b_badges_1":0,"oc_accueil":1,"s_accueil":1,"as_accueil":1,"b_accueil":1,"aumone":1,"benevolat_form":1,"auto_promo":1,"auto_promo_":1,"menu_gauche":1,"menu_droit":0,"modals_direct":1,"modals_save":1,"modals_droite":1}'),
(6, 'esperance', '{"title":0,"script":1,"style":1,"meta":0}', '{"tpls":1,"menu_h1":0,"accueil_h2":0,"accueil_h3s":0,"accueil_img":0,"accueil_video":0,"accueil_audio":0,"accueil_lien0":0,"accueil_lien1":0,"accueil_lien2":0,"accueil_lien3":0,"accueil_text":1,"type_0":1,"type_miracles":1,"type_conversions":1,"sauver":1,"sauver_":1,"guerir":1,"guerir_en_jesus":1,"menu_gauche":1,"menu_droit":1,"modals_direct":1,"modals_save":1,"modals_droite":1}');

-- --------------------------------------------------------

--
-- Structure de la table `rc`
--

CREATE TABLE IF NOT EXISTS `rc` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `activite` varchar(50) NOT NULL,
  `img` varchar(25) NOT NULL,
  `jour` date NOT NULL,
  `heure` varchar(10) NOT NULL,
  `nombre` int(11) NOT NULL,
  `participants` text NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `pays` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `descr` text NOT NULL,
  `lieu` varchar(100) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `rc`
--

INSERT INTO `rc` (`_id`, `langue`, `href`, `ajouteur`, `activite`, `img`, `jour`, `heure`, `nombre`, `participants`, `shares`, `likes`, `pays`, `ville`, `descr`, `lieu`) VALUES
(1, 'fr', 'fr', 2, 'sport', 'tmp_/rc/_1.png', '2017-06-23', '12:00', 2, '[]', '{}', '{"1":"hosanna"}', 'france', 'nice', 'iufsdhusdcj duiuds			', 'rue saint germain'),
(2, 'fr', 'fr', 2, 'sdqds', 'tmp_/rc/_9.png', '2017-06-30', '03:03', 3, '[]', '{}', '{"1":"hosanna"}', 'qsdsq', 'dqsdsq', '	dscfv					', 'zdzdf');

-- --------------------------------------------------------

--
-- Structure de la table `solidarite`
--

CREATE TABLE IF NOT EXISTS `solidarite` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `langue` varchar(2) NOT NULL,
  `href` varchar(255) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `action` varchar(150) NOT NULL,
  `jour` date NOT NULL,
  `heure` varchar(5) NOT NULL,
  `pays` varchar(25) NOT NULL,
  `ville` varchar(25) NOT NULL,
  `lieu` varchar(255) NOT NULL,
  `descr` text NOT NULL,
  `id_bourse` varchar(16) NOT NULL,
  `id_bourse_` int(11) NOT NULL,
  `bourse` int(7) NOT NULL,
  `ajouteur` int(7) NOT NULL,
  `participants` text NOT NULL,
  `shares` text NOT NULL,
  `likes` text NOT NULL,
  `comments` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `solidarite`
--

INSERT INTO `solidarite` (`_id`, `langue`, `href`, `titre`, `img`, `action`, `jour`, `heure`, `pays`, `ville`, `lieu`, `descr`, `id_bourse`, `id_bourse_`, `bourse`, `ajouteur`, `participants`, `shares`, `likes`, `comments`) VALUES
(1, 'fr', 'http://localhost:8080/vierge-marie-charite-chretienne#!solidarite-chretienne-sainte-mere-nature-bienfaisante=je-suis-uun-exemple-potent-d''action-de-solidarité', 'je suis uun exemple potent d''action de solidarité', 'DSC_0006.JPG', 'Soutien moral', '2017-06-29', '12:01', 'chine', 'peuimporte', 'encoremoins', 'vduhds iucugudscsdy cs', 'sJYGUByYU', 0, 0, 1, '[1]', '{}', '{}', '{"1_1501020750386":"dscd s sfdfds <br>"}');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(7) NOT NULL,
  `_img` varchar(255) NOT NULL,
  `_img_` varchar(255) NOT NULL,
  `_titre` varchar(100) NOT NULL,
  `participed` text NOT NULL,
  `created` text NOT NULL,
  `shared` text NOT NULL,
  `liked` text NOT NULL,
  `published` text NOT NULL,
  `guerir` text NOT NULL,
  `foi_value` int(4) NOT NULL,
  `charite_value` int(4) NOT NULL,
  `esperance_value` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `_img`, `_img_`, `_titre`, `participed`, `created`, `shared`, `liked`, `published`, `guerir`, `foi_value`, `charite_value`, `esperance_value`) VALUES
(1, '/imgs/exe.png', '/imgs/dieu.jpg', 'Je suis un exemple de titre d epage utilisateur', '{"charite":[1],"solidarite":[1],"benevolat":[1]}', '{"livres":[12],"charite":[1],"conversions":[1]}', '{}', '{"livres":[29],"rc":[2,1],"charite":[1],"miracles":[1],"cp":[4],"conversions":[3]}', '{"foi-priere-0":26,"charite-solidarite-0":28,"esperance-audio-0":29,"foi-priere-1":30,"foi-priere-2":31,"foi-priere-3":32}', '[1501283979850,1501283999120]', 1, 1, 1),
(2, '/imgs/exe.png', '/imgs/dieu.jpg', 'Je suis un exemple de titre d epage utilisateur', '{}', '{}', '{}', '{}', '{}', '[]', 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `_href` varchar(50) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `pseudo` varchar(25) NOT NULL,
  `email` varchar(75) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `remember_token` tinyint(1) NOT NULL DEFAULT '1',
  `expired_token` timestamp NULL DEFAULT NULL,
  `registered_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `confirmed_at` datetime DEFAULT NULL,
  `informations` varchar(255) NOT NULL DEFAULT '{}',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=65 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `_href`, `nom`, `prenom`, `pseudo`, `email`, `pwd`, `remember_token`, `expired_token`, `registered_at`, `confirmed_at`, `informations`) VALUES
(1, 'jjj', 'sd', 'qsd', 'qsd', 'sqd@dsq.q', 'd', 1, '2017-08-10 14:29:24', '2017-06-17 14:17:41', NULL, '{"birth":"","addr":"","etc":""}'),
(2, 'achi.cyrille.administrateur', 'achi', 'cyrille', 'administrateur', 'hi.cyril@gmail.com', 'bigcyri', 1, NULL, '2017-07-14 19:17:41', NULL, '{"birth":"","addr":"","etc":""}'),
(55, 'jjj', 'qsd', 'qsd', 'sdqds', 'sqddsq@qsd.qsd', 'dqsd', 1, NULL, '2017-06-02 21:16:23', NULL, '{"birth":"","addr":"","etc":""}'),
(56, 'jjj', 'qsd', 'sd', 'ds', 'ez@efg.FSd', 'df', 1, '2017-07-15 18:08:14', '2017-06-02 21:21:36', NULL, '{"birth":"","addr":"","etc":""}'),
(57, 'jjj', 'qsd', 'ffg', 'ds', 'sdfdfs@zef.fz', 'yg', 1, '2017-06-19 10:07:57', '2017-06-02 21:22:03', NULL, '{"birth":"","addr":"","etc":""}'),
(58, 'jjj', 'dsq', 'sqds', 'dsq', 'sdqnns@qsd.sdq', 'qsd', 1, NULL, '2017-06-03 09:10:57', NULL, '{"birth":"","addr":"","etc":""}'),
(60, 'jjj', 'sqsdq', 'dfds', 'jhg', 'hjhds@dsjhks.dcjgh', 'ygfug', 1, NULL, '2017-06-03 14:40:32', NULL, '{"birth":"","addr":"","etc":""}'),
(63, 'jjj', 'sqsdq', 'dfds', 'jhg', 'hjhsdds@dsjhks.dcjgh', 'sqd', 1, NULL, '2017-06-03 15:00:34', NULL, '{"birth":"","addr":"","etc":""}'),
(64, 'jjj', 'sqd', 'jyg', 'yjgh', 'dsq@qsd.qds', 'hgv', 1, NULL, '2017-06-04 08:43:21', NULL, '{"birth":"","addr":"","etc":""}');

-- --------------------------------------------------------

--
-- Structure de la table `_text`
--

CREATE TABLE IF NOT EXISTS `_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `opt` varchar(255) NOT NULL,
  `fr` text NOT NULL,
  `en` text NOT NULL,
  `es` text NOT NULL,
  `de` text NOT NULL,
  `cn` text NOT NULL,
  `jp` text NOT NULL,
  `ar` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=62 ;

--
-- Contenu de la table `_text`
--

INSERT INTO `_text` (`id`, `username`, `opt`, `fr`, `en`, `es`, `de`, `cn`, `jp`, `ar`) VALUES
(1, 'foi_accueil_text', '', '"\\"Dieu a tant aimé le monde qu''il a donné son Fils unique afin que quiconque croit en lui ne périsse pas mais ait la vie éternelle.\\"Jean3.16<br>\\"Car nous marchons par la foi et non par la vue.\\"2Corinthiens5.7<br>\\"Or la foi, c''est la ferme assurance des choses qu''on espère, la démonstration de celles qu''on ne voit pas.\\"Hébreux11.1<br>\\"Tout ce qui est né de Dieu remporte la victoire contre le monde, et la victoire qui a triomphé du monde, c''est votre foi.\\"Jean5.4<br><a traget=\\"_blank\\" href=''/'' title=''L''oeuvre et la communauté de Jesus-Christ maintenant sur internet''>L''agneau de Dieu</a> est venu sur terre nous présenter en offrande à l''humanité entière, la connaissance de <a traget=\\"_blank\\" href=''/dieu-le-pere-esperance-chretienne'' title=''L''espoir en Dieu le Père''>Dieu notre Père</a>, le <a traget=\\"_blank\\" href=''/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus'' title=''Iconographie chrétienne sur réseau social''>Dieu Miséricordieux</a> et <strong>empli d''Amour</strong>; du <a traget=\\"_blank\\" href=''/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde'' title=''Prier et obtenir les grâces de l''esprit-saint''>Paraclet le feu</a> qui consume le <strong>péché originel</strong> (péchés qui nous pousse dans la mort) en un <strong>coeur saint</strong> et un <strong>esprit saint</strong>; et enfin la preuve de l''<strong>Amour de Dieu notre Père</strong> à notre égard <strong>pauvres pêcheurs</strong> par la <strong>consubstantialité</strong> de l''être de <a traget=\\"_blank\\" href=''/jesus-christ-foi-chretienne'' title=''jésus le rédempteur''>Jésus à nos côtés</a>, ses miracles, <a traget=\\"_blank\\" href=''/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens'' title=''profonds enseignements chrétiens''>ses enseignements</a>, sa passion, sa mission accomplie, la marque indélébile de sa présence à nos côté jusqu''à l''<strong>éternité</strong>."', '', '', '', '', '', ''),
(2, 'foi_livres_text', '', '"Approfondir sa proximité avec Dieu à travers la <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=livres-chretiens\\" title=\\"livres foi messie\\">lecture d''ouvrages populaires de la religion chrétienne</a>, la découverte des produits d''éditeurs de livre de renom, l''acquisition de la sagesse de certains auteurs chrétiens, et de documents d''<a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens\\" title=\\"enseignements réseau social chrétien\\">enseignements profond</a> partagés ici sur <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises\\" title=\\"la foi chrétienne à l''état pur\\">jesus-chrsit.tv</a>. Accroître sa croyance et ses convictions en partageant et en méditant quotidiennement la enseignements profond</a> partagés ici sur <a traget=\\"_blank\\" href=\\"/_____homelies\\" title=\\"jesus chrsit verbe de Dieu\\">Parole du Seigneur</a> à l''aide de la participation de <a traget=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!prions-dieu-le-fils-pour-guerir\\" title=\\"esperance en dieu le père\\">prêtres, pasteurs et hommes d''église</a> donnants homélies et prédications. Découvrir <a traget=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!prions-dieu-le-fils-pour-guerir\\" title=\\"Affermir sa foi chrétienne en Jésus de Nazareth\\">des prières</a> grâce à la collaboration de toute la chrétienneté sur ce <a traget=\\"_blank\\" href=\\"/\\" title=\\"Le réseau social chrétien protestant et catholique\\">réseau-social</a>, permettants de mieux communier avec le Seigneur, de tourner son pauvre petit coeur toujours plus proches du Dieu Trinitaire, et de sanctifier son âme en purifiant son coeur ainsi. Découvrir aussi des cantiques, louanges et paroles d''adoration pour toujours faire avancer le culte de Dieu le Père dévoilé par le fils de la Vierge Maire, notre seigneur et sauveur Jésus-Christ."', '', '', '', '', '', ''),
(3, 'foi_images_text', '', '"<a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus\\" title=\\"Le royaume du ciel en image\\">L’iconographie religieuse chrétienne</a>, loin d''être une hérésie, est un fondement de la <a traget=\\"_blank\\" href=\\"/\\" title=\\"Un réseau social à l''image de ses fidèles\\">théologie chrétienne</a>. Elle permet de mettre en <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!images-chretiennes-dieu-jesus=images-religieuses-chretiennes\\" title=\\"Les meilleurs images foi chrétiennes\\">perspective des aspects de la croyance christique</a> sous certains reliefs, tel que le péché, la puissance des anges et archanges, le <a traget=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"temple de Dieu, père celeste, élohim\\">royaume des cieux du paradis</a>, la dimension de l''<a traget=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"croyance dans l''oeuvre de jésus sur reseau social jesus-christ.tv\\">eucharistie</a>, et bien d''autres aspects. Téléchargez et mettez ces images sur tous vos appareils et partout autour de vous. La foi en l''oint de Dieu vous sauvera"', '', '', '', '', '', ''),
(4, 'foi_musics_text', '', '"Comme <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne\\" title=\\"Christ ressuscité\\">la foi</a>, la musique est impalpable. Les célébrités de la <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration\\" title=\\"Musique chrétienne\\">musique chrétienne</a> ne sont pas <a traget=\\"_blank\\" href=\\"/\\" title=\\"meilleur réseau social\\">Paul de tarse, Jean le baptiste, Marie Madeleine ou l''apôtre Jean</a>, bien que leurs paroles de vérité d''amour d''unité et de sainteté fassent vibrer nos coeurs dans la <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises\\" title=\\"inspiration des texte chrétiens\\">foi en christ ressuscité</a> . Cependant ce sont de vraies <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=artistes-chretiens\\" title=\\"artistes chrétiens\\">stars chrétiennes</a> qui nous inspirent comme les étoiles dans les cieux, ainsi certains d''entre nous, fidèles chrétiens, reçoivent des paroles <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=musiques-chretiennes\\" title=\\"audios évoquant la foi en christ\\">d''adoration de louange de bénédiction ou des cantiques</a> qui sont aussi douces à l''oreille que le duvet des lamas des pleines mongolienne. Aussi, nous avons besoin de vibrations qui fassent <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration=artistes-chretiens\\" title=\\"amour de la musique religieuse chrétienne\\">bouger notre corps en des mouvements emplis de grâce d''amour</a> et de béatitude, qui rendent notre corps joyeux, heureux, guai, en harmonie avec l''héritage que le Rédempteur nous a laissé. C''est ce que le <a traget=\\"_blank\\" href=\\"/\\" title=\\"amour de la musique religieuse chrétienne\\">réseau social chrétien jesus-christ.tv</a> vous propose dans cette section réservé au multimédia type audio. Merci d''être Jésus."', '', '', '', '', '', ''),
(5, 'foi_films_text', '', '"Le cinéma permet de vivre des événements comme étant présent sur la scène, et les <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens\\" title=\\"enseignements spirituels chrétiens\\">enseignements et vidéos-montage</a> sont un condensé de connaissance religieuse impressionnant. Dans notre époque moderne, il existe des séries-télévisé, des animations et courts-métrage hautement inspirés par <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne\\" title=\\"Troisième personne de la trinité\\">l''esprit-saint</a> que nous mettons à la disposition des utilisateurs du <a traget=\\"_blank\\" href=\\"/\\" title=\\"Partager l''oeuvre de Jésus sur internet\\">réseau social chrétien jesus-chrsit.tv</a>. Nous voulons éveiller en vous <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde\\" title=\\"Sauver les âmes, apporter la bonne nouvelle\\">l''oeuvre de Jésus-Christ</a>. Revivez la Cène, certain conciles œcuméniques, <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!films-jesus-christ-notre-seigneur=films-series-courts-metrages-chretiens\\" title=\\"Films chrétien passion du christ\\">la passion du Christ</a>, l''<a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne\\" title=\\"assomption de la vierge marie\\">assomption</a>, la vie des apôtres avec et après Jésus, le baptême de Jésus de Nazareth ici."', '', '', '', '', '', ''),
(6, 'foi_prieres_tooltip', '', '["il faut apprendre par coeu les priere proposé par les internautes pour que cela ai un sens....etc"]', '', '', '', '', '', ''),
(7, 'foi_rencontres_form', '', '{}', '', '', '', '', '', ''),
(8, 'foi_prieres_form', '', '{}', '', '', '', '', '', ''),
(9, 'accueil_form_1', '', '{"action":"reseau-social-chretien","titre":"Informations","titre_":"Autre","input_0":"Votre nom","input_1":"Votre prénom","input_2":"Votre email","input_3":"Votre pseudonyme","input_4":"Votre mot de passe","_input_0":"Votre date de naissance","_input_1":"Votre adresse physique","_input_2":"Autres détails"}', '', '', '', '', '', ''),
(10, 'accueil_flashes', '', '{"signin_DUP":" || Impossible d''entrer cet utilisateur : cet email existe déjà.","field_void":"Le champ (__) est vide, veuillez le remplir","login":"l''email (__) ne correspond à aucun utilisateur de jesuschrist.tv, veuillez vous enregistrer","setcookied":"Bienvenue (__) sur jesuschrist.tv","login_already":"Ne pas actualiser la page (vous êtes en POST) vous êtes déjà connecté"}', '', '', '', '', '', ''),
(11, 'all_menu', '', '{"lien0":{"html":"Foi","href":"jesus-christ-foi-chretienne","title":"L''oint du Seigneur, notre Seigneur Jésus-Christ nous a donné la foi en sa bonne nouvelle, les évangiles.","src":"imgs/foi-chretienne-jesus-fils-unique-de-dieu.png","alt":"Foi en l''agneau de Dieu, jésus-christ .tv, réseau social chrétien"},"lien1":{"html":"Charité","href":"vierge-marie-charite-chretienne","title":"La charité maternelle de la mère de Dieu, la Madone, Marie de nazareth.","src":"imgs/tres-sainte-vierge-marie-charite.png","alt":"La charité chrétienne avec le coeur immaculé de la vierge Marie sur jesus-christ .tv, réseau social chrétien"},"lien2":{"html":"Espérance","href":"dieu-le-pere-esperance-chretienne","title":"L''Amour du créateur, l''alpha et l''omega, gardien du paradis et l''espérance de l''humanité.","src":"imgs/dieu-notre-pere-espoir-chretien.png","alt":"L''esperance en le Dieu Trinitaire sur jesus-chrsit .tv, réseau social chrétien"}}', '', '', '', '', '', ''),
(12, 'foi_rencontres_tooltip', '', '["il est important de respecter son adhésion à une activité, sinon vous pourrez être signalé puis blamé sur le site....etc","teste array"]', '', '', '', '', '', ''),
(13, 'foi_menu_gauche', '', '{"lien0":{"html":"Livres&Prières","href":"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises","title":"Jésus-Chrsit vous enseigne les vérités et prières chrétiennes du ciel"},"lien1":{"html":"Icônes&Images","href":"/jesus-christ-foi-chretienne#!images-chretiennes-foi-jesus","title":"Les images chrétiennes de Dieu, de Jésus-Christ, de Marie et des anges du ciel"},"lien2":{"html":"Musiques chrétiennes","href":"/jesus-christ-foi-chretienne#!musiques-chretiennes-chants-adoration","title":"Rythmez-vous sur le divin que jésus nous offre"},"lien3":{"html":"Films&Courts-métrage","href":"/jesus-christ-foi-chretienne#!cinema-enseignement-chrsitologie","title":"Visionnez des films, animes, thèmes, orateurs, court-métrages ou  encore enseignements sur l''oeuvre de notre Seigneur Jésus-Chrsit"},"lien4":{"html":"Communautés de prière","href":"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde","title":"Prions ensemble pour la paix et l''avenement de l''esprit-saint de la trinité chrétienne sur le monde"},"lien5":{"html":"Rencontres chrétiennes","href":"/jesus-christ-foi-chretienne#!amour-chretien-relation-amitie-avec-jesus","title":"Laissons Jésus-Christ nous rassembler comme des frères fils de Dieu, Amour de l''esprit et disciple de Jésus-Christ"}}', '', '', '', '', '', ''),
(14, '_all_menu_gauche', '', '{"lien0":{"title":"Posts du réseauc-social chrétien et Page d''accueil"},"lien1":{"title":"Accéder au menu secondaire"},"lien2":{"title":"Visite guidé du site jesus-christ.tv"},"menuS":{"h3":"Menu secondaire","share_h4":"Partager sur les réseaux sociaux :","share_h5":"le site web jesus-chrsit.tv","share_h5_":"la page en cours : ","share_lien0":{"href":"","title":""},"share_lien1":{"href":"","title":""},"share_lien2":{"href":"","title":""},"share_lien3":{"href":"","title":""},"share_lien0_":{"href":"","title":""},"share_lien1_":{"href":"","title":""},"share_lien2_":{"href":"","title":""},"share_lien3_":{"href":"","title":""},"droits_h4":"Les droits de publication et d''utilisation :","droits_lien0":{"html":"Termes et conditions d''utilisation","href":"","title":""},"droits_lien1":{"html":"etc","href":"","title":""},"droits_lien2":{"html":"etc","href":"","title":""},"lien0":{"html":"Imprimer la page","href":"","title":""}}}', '', '', '', '', '', ''),
(15, '_all_bar_top', '', '{"button_self":{"href":"jesus-christ-foi-chretienne","title":"Le réseau-social dans le feu de l''amour de l''esprit-saint chrétien de jésus-christ","src":"tmp1/icone/select_personne.png","alt":"réseau-social chrétien page d''accueil"},"form_top":"Recherche sur tout le réseau","button_account":{"href":"entrer-le-nom-de-mon-compte","title":"Votre commpte chrétien sur jesus-christ .tv","src":"tmp1/artiste1.jpg","alt":"le-nom-prenom-pseudonyme-du-compte"},"mon_compte":{"_0":"Déconnexion"}}', '', '', '', '', '', ''),
(16, 'foi_modals_direct', '', '{"comments":"commentaire","descr":"Description","participe":"Demander à participer","add_coms":"Ajouter commentaires","sharing":"Partager à ses ami(e)s","like":"Voter/Liker","general_header_html":{"seecoms":"Ecrire, ou voir les commentaires des internautes","share":"Partagé ","times":"fois","added":"ajouté par"},"general_bottom_html":{"buy":"Acheter","ebook":"E-book (payant)","dl":"Télécharger","_dl":"Télécharger (gratuit)","dl_":"Télécharger (payant)","files":"jesus-christ.tv","watch":"Visionner en ligne","watch_":"Regarder en ligne","listen":"&Eacute;couter en ligne","stream":"Streaming","share":"Share","tweet":"Tweet","google":"Google","email":"E-mail","amen":"Amen","hosanna":"Hosanna","alleluia":"Alleluia"},"general_bottom_titles":{"liens":{"livres_0":"Acheter une édition chez une plateforme ecommerce","livres_1":"Acheter sur une plateforme d''e-book","livres_2":"Lire sur une plateforme d''e-book","livre_3":"Téléchargez le livre ou la prière au format ","images_0":"Acheter sur un ecommerce religieux","images":"Téléchargez l''image au format ","images_":"Visionner l''image sur une plateforme-web type Instagram","musics_0":"Acheter le format numérique sur une plateforme ecommerce","musics_1":"Télécharger au format ","musics_2":"&Eacute;couter sur une plateforme-web de streaming audio type...","films_0":"Acheter dvd,blueray sur une plateforme ecommerce","films_1":"Télécharger au format ","films_2":"Regarder en streaming sur une plateforme-web gratuite"},"share":{"_0":"Partagez sur","_1":"Partagez par"},"like":{"__":"sur","livres":"ce livre","livres_":"cette prière ou ce cantique","images":"cette image","musics":"cette chançon ou cette album","musics_":"ce chant","films":"ce film ou ce court-métrage","films_":"cette orateur ou ce thème"}},"general_bottom_titre_liens":{"livres":"Liens externe","images":"Télécharger image au format","musics":"&Eacute;outer/Télécharger","films":"Télécharger/Regarder en ligne"}}', '', '', '', '', '', ''),
(17, 'foi_modals_save', '', '{"general":{"h_0":{"label":"Titre ","ph":"Entrer le titre "},"h_0_":{"label":"Titre/Nom ","ph":"Entrer le nom/titre "},"h_0__":{"label":"Titre alternatif ","ph":"Entrer un titre alternatif"},"h_1":{"label":"Auteur ","ph":"Entrer l''auteur "},"h_1_":{"label":"Auteur éventuel","ph":"s''il existe, entrer l''auteur "},"h_2":{"label":"Image ","ph":"Ajouter"},"h_2_":"&Eacute;ventuellement une image","h_2__":{"label":"Ajouter d''autres images ","ph":"Ajouter"},"m_input0":"Courte description ","m_input1":"Description générale ","m_select":{"label":"Choisir le theme ","ph":"Cliquer ici pour choisir le thème","label_":"...ou entrez-le ici","ph_":"Entrer vous-même le thème "},"m_input2":{"label":"Entrer les informations sur ","ph":"Toutes informations pouvants être utile"},"corner":{"_0":"Champ obligatoire","_1":"Champ facultatif"},"validate":"Valider le formulaire","approuver":"J''ai lu et j''approuve la charte de jesus-christ.tv","approuver_":{"_0":"Prévisualiser","_1":"Enregistrer","_2":"Soumettre"}},"livres":{"general0":"du livre","general1":"de la prière ou du cantique","general2":"le livre ","m_input1":"Entrer en entier la prière si elle n''est pas trop longue, sinon charger-la en fichier plus bas","m_select":{"option0":"Jésus-chrsit","option0_":"jesus","option1":"Dieu le Père","option1_":"dieu","option2":"Vierge-Marie","option2_":"marie","option3":"Les anges","option3_":"anges"},"m_select1":{"option0":"Livret de prière","option0_":"livret","option1":"Prière d''adoration","option1_":"adoration"},"m_input2":{"label":"Numéro d''ISBN ","ph":"n°ISBN"},"m_input3":"comme suit :<br>ex: lien:http://exemple1.fr , date_sortie:2002 , pages:418","m_input3_":"comme suit :<br>ex: lien:http://exemple1.fr , conseil:chanter alto , prier:à plus de trois personnes","f_input0":{"label":"Lien(s) vers où acheter","ph":"https://exemple1.fr"},"f_input1":{"label":"Lien(s) vers e-book","ph":"https://exemple1.fr"},"f_input2":{"label":"Lien(s) vers téléchargement","ph":"https://exemple1.fr"},"f_input3":{"label":"Charger un fichier texte ou audio à télécharger","ph":"Parcourir.."}},"images":{"general0":"de l''image","m_select":{"option0":"thème n°1 à trouver","option0_":"a_trouver"},"m_select_":{"label":"Choisir le type d''image que vous ajoutez","ph":"Cliquer ici pour choisir le type de l''image","option0":"Une image","option0_":"image","option1":"Une icône religieuse","option1_":"icone","option2":"Une peinture chrétienne","option2_":"peinture","option3":"Une image animée","option3_":"anime"},"m_input2":" comme suit :<br>ex: lien:http://exemple1.fr","f_input0":{"label":"Lien(s) d''un ecommerce d''images","ph":"https://exemple1.fr"},"f_input1":{"label":"Lien(s) vers l''image","ph":"https://exemple1.fr"},"f_input2":{"label":"Charger un fichier images de dimension 1024x800, 720x330 ou 420x180 à télécharger","ph":"Parcourir.."}},"musics":{"general0":"de la chançon ou de l''album","general5":"la chançon ou de l''album","general1":"du single ou de l''album","general2":"éventuelle de la chançon ou de l''album ici","general3":"de l''artiste","general4":"l''artiste","h_input0":{"label":"Nom de scène ","ph":"Entrer le nom de scène "},"h_input1":{"label":"Identité réel ","ph":"Entrer l''identité réel "},"m_select":{"label":"Choisir le style musical, ou...","ph":"Cliquer ici pour choisir un style musical ","label_":"...ou entrez-le","ph_":"Entrer vous-même le style musical ","option0":"Reagge","option0_":"reagge","option1":"Gospel","option1_":"gospel","option2":"Rap/Hip-Hop","option2_":"rap"},"m_select1":{"label":"Choisir le style de chant, ou...","ph":"Cliquer ici pour choisir un style du chant","label_":"...ou entrez-le","ph_":"Entrer vous-même le style du chant","option0":"D''intersescion","option0_":"intersescion","option1":"D''adoration","option1_":"adoration","option2":"De louange","option2_":"louange"},"m_select_":{"label":"Choisir le secteur géographique ","ph":"Cliquer ici pour une zone du monde","option0":"Afrique Ouest","option0_":"afriqueO","option1":"Occident","option1_":"occident","option2":"Asie Oriental","option2_":"asieO","option3":"Magrheb","option3_":"magrheb","option4":"Etc","option4_":"etc"},"m_select__":{"label":"Choisir la langue ","ph":"Cliquer ici pour choisir la langue","option0":"Francais","option0_":"fr","option1":"Anglais","option1_":"en","option2":"Espagnol","option2_":"es","option3":"Portuguais","option3_":"po","option4":"Allemand","option4_":"de","option5":"Chinois","option5_":"cn","option6":"Japonais","option6_":"jp","option7":"Arabe","option4_":"ar"},"m_input3":{"label":"Entrer dans quelle langue chante ","ph":""},"m_input4":" comme suit :<br>ex: lien:http://exemple1.fr","m_input4_":" comme suit :<br>ex: lien:http://exemple1.fr dhsdqhjsq","f_input0":{"label":"Lien(s) vers où acheter","ph":"https://exemple1.fr"},"f_input1":{"label":"Lien(s) vers une plateforme de streaming audio (écoute en ligne)","ph":"https://exemple1.fr"},"f_input2":{"label":"Lien(s) vers téléchargement","ph":"https://exemple1.fr"},"f_input3":{"label":"Charger un fichier texte ou audio à télécharger","ph":"Parcourir.."},"f_input4":{"label":"Lien(s) information (ex: wikipedia, lyrics360 etc)","ph":"https://exemple1.fr"}},"films":{"general0":"du films ou court-métrage","general1":"de l''orateur ou de l''enseignement","general2":"l''orateur ou l''enseignement","h_input1":{"label":"Réalisateur ","ph":"Entrer le nom du réalisateur "},"h_input2":"de l''affiche cinéma","m_input2":{"label":"Date de sortie ","ph":"Entrer la date de sortie "},"m_input3":{"label":"Durée ","ph":"Entrer la durée "},"m_select":{"__label":"...ou entrer-le thème ci-dessous :","_label":"Entrer le thème ","label":"Choisir le(s) personnage(s) centra(l/ux) ","label_":" (ex: jésus,dieu etc)","ph":"Cliquer ici pour choisir","ph_":"...ou entrer le thème ici","option0":"Jésus","option0_":"jésus","option1":"La Vierge Marie","option1_":"marie","option2":"Dieu","option2_":"dieu","option3":"Les Anges","option3_":"anges","option4":"L''ante-christ","option4_":"antechrist"},"m_input4":" comme suit :<br>ex: lien:http://exemple1.fr","m_input4_":" comme suit :<br>ex: lien:http://exemple1.fr, uiyuhiu","m_input5":"De/Dans quelle langue est ","f_input0":{"label":"Lien(s) vers où acheter","ph":"https://exemple1.fr"},"f_input1":{"label":"Lien(s) vers une plateforme de streaming (regarder en ligne)","ph":""},"f_input2":{"label":"Lien(s) vers téléchargement","ph":"https://exemple1.fr"},"f_input3":{"label":"Lien(s) information (ex: google, wikipedia, allocine etc)"}}}', '', '', '', '', '', ''),
(18, 'foi_modals_droite', '', '{"send":"Envoyer","save":"Enregistrer","prev":"Prévisualiser","terms":"Termes et condition d''utilisation","add":"Ajouter","p":"Elle sera publiée sur le blog de la foi","priere":{"h2":"Entrez une simple prière comme vous en faites tous les jours","label":"Entrez votre prière d''aujourd''hui"},"image":{"h2":"Envoyer une image ou infographie évoquant Dieu, accompagné ou pas d''un petit commentaire","label_titre":"Titre éventuel de votre image ou infographie","label_com":"Petit commentaire éventuel de votre image ou infographie","label_file":"Uploadez votre image ou infographie....","label_url":{"label":"....ou ajouter ci-dessous un lien vers l''image ou l''infographie","ph":"https://exemple1.com/v="}},"audio":{"h2":"Envoyer un fichier audio ou bande numérique d''enseignement ou autre évoquant notre Dieu Trine, accompagné ou pas d''un petit commentaire","label_titre":"Titre éventuel de votre fichier audio","label_com":"Petit commentaire éventuel de votre fichier audio","label_file":"Uploadez votre fichier audio....","label_url":{"label":"....ou ajouter ci-dessous un lien vers le fichier audio","ph":"https://exemple1.com/v="}},"video":{"h2":"Envoyer une vidéo ou lien internet évoquant notre Dieu Trine, accompagné ou pas d''un petit commentaire","label_titre":"Titre éventuel de votre vidéo","label_com":"Petit commentaire éventuel de votre vidéo","label_file":"Uploadez votre vidéo....","label_url":{"label":"....ou ajouter ci-dessous un lien vers la vidéo","ph":"https://exemple1.com/v="}}}', '', '', '', '', '', ''),
(20, 'foi_livres__btns_', '', '{"btn0title":"Les prieres proposées par jesus-christ.tv","btn0html":"Prières chrétiennes","btn0href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=prieres-chretiennes","btn1title":"Les prieres proposées par les membres de jesus-christ.tv","btn1html":"Prières chrétiennes proposés par les membres de jesus-christ.tv","btn1href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=prieres-chretiennes&foi-priere-internautes","btn2title":"Proposer une prière aux memebres de jesus-christ.tv","btn2html":"Partager une priere sur jesus-chrsit.tv","btn2href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=prieres-chretiennes&partage-internautes-reseau-social-priere","btn3title":"Charger de nouvelles prières dans la liste","btn3html":"Soif de priere chrétienne ?","btn3href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=prieres-chretiennes&plus-de-prieres-chretiennes"}', '', '', '', '', '', ''),
(21, 'foi_livres__btns', '', '{"btn0title":"Les oeuvres litteraires proposées par jesus-christ.tv","btn0html":"Oeuvres litteraires chrétiennes","btn0href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=livres-chretiens","btn1title":"Les livres proposés par les membres de jesus-christ.tv","btn1html":"Oeuvres litteraires proposées par jesus-christ.tv","btn1href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=livres-chretiens&foi-livres-internautes","btn2title":"Proposer une oeuvre litteraire","btn2html":"Partager une oeuvre litteraire sur la chrétienneté","btn2href":"#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=livres-chretiens&partage-internautes-reseau-social-livre","btn3title":"Charger de nouveaux livres dans la liste","btn3html":"Soif de sagesse chrétienne","btn3href":"#!livres-prieres-jesus-christ-anges-ciel-etc=prieres-chretiennes&plus-de-livres-chretiens"}', '', '', '', '', '', ''),
(22, 'foi_images__btns', '', '{"btn0title":"Les images proposées par jesus-christ.tv","btn0html":"L''iconographie religieuse chrétienne","btn0href":"#!images-chretiennes-foi-jesus=images-chretiennes","btn1title":"Les images proposées par les membres de jesus-christ.tv","btn1html":"Iconographie chrétienne des memebres du meilleur réseau social chrétien","btn1href":"#!images-chretiennes-foi-jesus=images-chretiennes&foi-images-internautes","btn2title":"Proposer un image","btn2html":"Partager une iconographie chrétienne","btn2href":"#!images-chretiennes-foi-jesus=images-chretiennes&partage-internautes-reseau-social-image","btn3title":"Charger de nouvelles images dans la liste","btn3html":"Soif de vision trinitaire ?","btn3href":"#!images-chretiennes-dieu-jesus=images-chretiennes&plus-d-images-chretiennes"}', '', '', '', '', '', ''),
(24, 'foi_musics__btns', '', '{"btn0title":"Les artistes et musiques chrétiennes proposés par jesus-christ.tv","btn0html":"Musiques chrétiennes","btn0href":"#!musiques-chretiennes-chants-adoration=musiques-chretiennes","btn1title":"Les musiques chrétiennes proposées par les membres de jesus-christ.tv","btn1html":"Musique chrétienne des membres du réseau social jesus-christ.tv","btn1href":"#!musiques-chretiennes-chants-adoration=artistes-chretiens&foi-musiques-internautes","btn2title":"Proposer une musiques chrétienne","btn2html":"Le partage de musique chrétienne n''est pas une hérésie","btn2href":"#!musiques-chretiennes-chants-adoration=musiques-chretiennes&partage-internautes-reseau-social-musique","btn3title":"Charger de nouvelles musiques chrétiennes dans la liste","btn3html":"envie de vibrer avec jésus ?","btn3href":"#!musiques-chretiennes-chants-adoration=musiques-chretiennes&plus-de-musiques-chretiennes"}', '', '', '', '', '', ''),
(25, 'foi_musics__btns_', '', '{"btn0title":"Les chants et méditations chrétiennes proposées par jesus-christ.tv","btn0html":"Chants et méditations chrétiennes","btn0href":"#!musiques-chretiennes-chants-adoration=chants-chretiens","btn1title":"Les chants chrétiens proposés par les membres de jesus-christ.tv","btn1html":"Chants et méditations chrétiens proposées par les internautes","btn1href":"#!musiques-chretiennes-chants-adoration=chants-chretiennes&foi-chancons-internautes","btn2title":"Proposer un chant ou une méditation chrétienne","btn2html":"Partager un chant intéressant ou une méditation orale","btn2href":"#!musiques-chretiennes-chants-adoration=musiques-chretiennes&partage-internautes-reseau-social-chants","btn3title":"Charger de nouveaux chants/méditations dans la liste","btn3html":"Soif de méditations chrétiennes ?","btn3href":"#!musiques-chretiennes-chants-adoration=chants-chretiens&plus-de-chants-chretiennes"}', '', '', '', '', '', ''),
(26, 'foi_films__btns', '', '{"btn0title":"Les films, séries ou courts-métrages sur la chrétienneté proposés par jesus-christ.tv","btn0html":"Films séries court-métrage sur réseau-social chrétiens","btn0href":"#!cinema-enseignement-christologie=films-series-courts-metrages-chretiens","btn1title":"Les films, séries ou courts-métrages sur la chrétienneté proposés par les membres de jesus-christ.tv","btn1html":"cinema proposé par les membres du réseau social chrétien","btn1href":"#!cinema-enseignement-christologie=films-series-courts-metrages-chretiens&foi-cinema-internautes","btn2title":"Proposer une vidéo cinématographique évoquant la chrétienneté","btn2html":"Proposer vidéo sur réseau-social chrétien jesus-christ.tv","btn2href":"#!cinema-enseignement-christologie=films-series-courts-metrages-chretiens&partage-internautes-reseau-social-film-cinema-serie","btn3title":"Charger de nouveaux films chrétiens dans la liste","btn3html":"Soif de plus de films chrétiennes","btn3href":"#!cinema-enseignement-christologie=films-series-courts-metrages-chretiens&plus-de-films-chretiens"}', '', '', '', '', '', ''),
(27, 'foi_films__btns_', '', '{"btn0title":"Les enseigenemtns ou les orateurs proposés par jesus-christ.tv","btn0html":"Vidéos chrétiennes","btn0href":"#!cinema-enseignement-christologie=enseignements-predicateurs-chretiens","btn1title":"Les enseigenemtns et orateurs chrétiens proposés par les membres de jesus-christ.tv","btn1html":"enseignements chrétien vidéo proposés par memebres jesus-christ.tv","btn1href":"#!cinema-enseignement-christologie=enseignements-predicateurs-chretiens&foi-videos-religion-chretienne-internautes","btn2title":"Proposer une vidéo d''un enseigenemtns ou d''un prédicateur évoquant la chrétienneté, la trinité etc","btn2html":"Proposer une vidéo sur réseau-social chrétien jesus-christ.tv","btn2href":"#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens&partage-internautes-reseau-social-video-religion-chretienne","btn3title":"Charger de nouveaux films dans la liste","btn3html":"Soif de plus d''enseignement chrétiens","btn3href":"#!cinema-enseignement-christologie=films-series-courts-metrages-chretiens&plus-de-videos-chretiennes"}', '', '', '', '', '', ''),
(28, 'foi_cp_accueil', '', '{"btn_0_html":"Créer une communauté de prière","btn_0_title":"Permettre aux chrétiens de rentrer en communion avec l''esprit-saint de jésus par la prière","btn_0_href":"#!prions-dieu-ensemble-paix-monde=creer-communaute-priere","btn_1_html":"Rejoindre une communauté de prière","btn_1_title":"Rendre son âme plus proche du feu de l''esprit-saint de jésus","btn_1_href":"#!prions-dieu-ensemble-paix-monde=rejoindre-communaute-priere","mult_src":"bottom.jpg","mult_alt":"jésus nous enseigne la priere en commuanuté dur jesus-christ.tv","mutl_title":"Prions en frères et soeurs l''esprit-saint de jésus-christ","p":"<h2>Réseau-social chrétien: Communautés de prière</h2><a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde\\" title=\\"Demandez dans la foi et vous recevrez\\">La prière</a> permet d''<a traget=\\"_blank\\" href=\\"/\\" title=\\"L''amour de jésus-christ\\">aimer son prochain</a>, d''<a traget=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!dieu-donne-force-changer-le-monde\\" title=\\"aider à changer le monde avec l''espérance en Dieu\\">aider le l''humanité</a>, de <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde=rejoindre-communaute-priere\\" title=\\"La prière sauve l''âme\\">sanctifier son âme</a>, de guérir de ses maux physiques et psychologique, ainsi que d''<a traget=\\"_blank\\" href=\\"top-chretien.com/topmessages/texte/dieu-nous-avait-crees-pour-etre-heureux/\\" title=\\"Deutéronome 4.40\\">être heureux</a>.<br>\\"En vérité je vous dis encore que si deux d''entre vous s''accordent sur la Terre pour demander quoi que ce soit, cela leur sera donné par mon Père qui est dans les cieux. Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d''eux.\\" Mathieu 18.19-20<br>Il y a une grande puissance dans la prière en groupe car c''est celle que le <strong>Christ enseigne</strong> à ses apôtres dans le Pater. jesus-christ.tv est un réseau-social chrétien où vous pouvez facilement trouver des croyants de même <strong>profession de foi</strong> pour expérimenté une forme nouvelle de <strong>prière communautaire</strong> : <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde=creer-communaute-priere\\" title=\\"Prier Jésus en groupe sur internet\\">la prière communautaire sur internet</a>. <strong>Invoquer la trinité</strong> à agir dans votre vie, inviter la <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne\\" title=\\"Charité de la vierge marie\\">Mère du Christ</a> à vous montrer les <strong>chemins de sainteté</strong>, implorer l''<strong>action des puissances divine et angéliques</strong> dans vos activités, ou demander la <a traget=\\"_blank\\" href=\\"bible.knowing-jesus.com/Francais/topics/protection,De-Dieu\\" title=\\"Dieu, le fournisseur\\">protection de Dieu</a> contre les agissements du malin sur votre <strong>âme</strong>, faite aussi cela pour vos proches et vous aiderez l''humanité comme le <strong>fils unique de Dieu</strong> vous le demande."}', '', '', '', '', '', ''),
(29, 'foi_tpls', '', '{"cp":{"prieurs":" prieurs","voir":" voir","lire_suite":"Lire la suite"}}', '', '', '', '', '', ''),
(30, 'foi_cp_form', '', '{"_1":{"titre":" Image de votre communauté","label":"Faite attention aux dimensions de votre image, nous vous conseillons un minimum de 100px de largeur"},"_2":{"titre":"Nom de votre communauté","label":"Entrez un titre faisant moins de 100 caractères","ph":"Titre de la communauté de prière"},"_3":{"titre":"Status de votre communauté","label":"Le <u>status local</u> permet d''ouvrir la <strong>communauté de prière</strong> sur une ville/région choisie, <br/>tandis que le <u>status international</u> permet d''ouvrir la communauté au moonde entier.<br/>Les <strong>communautés de prière</strong> sont par défaut définient en <u>status local</u>","ph":"Local","ph_":"International"},"_4":{"titre":"Courte présentation de votre communauté (200 caractère)","label":"Résumé de la communauté de prière...","ph":"______"},"_5":{"titre":"Description complète","label":"La description global de votre communauté de prière","ph":"____"},"_6":{"titre":"Choisir la prière de votre communauté....","titre_":".....ou, choisissez/écrivez votre propre prière","ph":"Titre de la prière","ph_":"Votre prière....","label":"void","btn":"Choisir prière...","opt0":"pater","opt0_":"Notre Père","opt1":"credo","opt1_":"Je crois","opt2":"salut","opt2_":"Je vous salut Marie","opt3":"saint-esprit","opt3_":"Enflamme nous","opt4":"autre","opt4_":"Une autre prière","label":"Choisissez l(es)''heure(s) à laquelle/auxquelles prier"},"_7":{"titre":"(optionnel) La durée de vie de votre communauté de prière","p":"Par défaut, les communauté de prière ont une durée de vie d''un an<br>(cela évite d''avoir des communautés populaires dans le nombre mais pas dans les faits)<br>Par défaut, la date de début est aujourd''hui et celle de fin est aujourd''hui + 365 jours","label":"Choisissez une date de début et une date de fin"}}', '', '', '', '', '', ''),
(31, 'foi_rc_form', '', '{"_1":{"titre":" Choisissez votre activité (ou proposez-en une)","p":"Les activités que vous choisissez ou que vous écrivez vous-même sont....","label":"Faite votre choix dans la liste suivante...","label_":"...ou entrer le titre de l''activité ci-dessous","btn":"Choisir activité...","s":{"_0":"Sport (foot, volley ...)","_0_":"sport","_1":"Divertissement (bowling, café ...)","_1_":"divertissement","_2":"Musique en coeur","_2_":"musique","_3":"Discuter de la Parole","_3_":"parole","_4":"Evangélisation de la ville","_4_":"evengelisation","_5":"Jeûne collectif","_5_":"jeune","_6":"Recollection ou sortie programmé","_6_":"recollection"}},"_2":{"titre":"Choisissez un jour, une heure et un lieu de rendez-vous","p":"Préciser une date, une heure et un lieu pour que les autres membres puissent savoir quand et où vous rejoindre","label":"Jour","label_":"Heure","label__":"Lieu","ph":"ex: rue Saint laurent, proche de l''église"},"_3":{"titre":"Choisissez un nombre de participant (optionnel)","label":"Nombre de participants ?","p":"Le nombre de participant est limité à 20 personnes, car au delà représente plus une <a href=''#''>activité caritative</a>"},"_4":{"titre":"Indiquez le pays et la ville","label":"Pays","label_":"Ville","s":{"ph":"Choisir votre pays"},"p":"Ces informations géographique nous permettent de rediriger les activités postés dans les régions adéquates"},"_5":{"titre":"Entrer un mot à l''attention des internautes","p":"Il sera possible pour les participants à votre activité de communiquer via un tchat","label":"Entrer votre mot ci-dessous"}}', '', '', '', '', '', ''),
(33, 'foi_rc_accueil', '', '{"btn_0_html":" Créer une activité de rencontre","btn_0_title":"Jésus nous aide à mieux nous aimer dans le feu de l''esprit-saint","btn_0_href":"#!amour-chretien-relation-amitie-avec-jesus=creer-activite-chretienne","btn_1_html":" Se joindre à une activité chrétienne","btn_1_title":"Participer à une rencontre chrétienne proche de chez vous","btn_1_href":"#!amour-chretien-relation-amitie-avec-jesus=rejoindre-activite-chretienne","mult_src":"bottom.jpg","mult_alt":"jésus nous enseigne l''amour, fraternité chrétienne sur jesus-christ.tv","mutl_title":"Rencontrons nos frères chrétiens dans le feu de l''amour de l''esprit-saint","p":"<h2>Réseau-social chrétien : rencontres chrétiennes</h2>Les plateformes de <a traget=\\"_blank\\" href=\\"jetunoo.fr\\" title=\\"site de rencontre chrétien\\">rencontre chrétienne</a> sont nombreuses mais elles sont exclusivement orientés <a traget=\\"_blank\\" href=\\"theotokos.fr\\" title=\\"relation charnelle chrétien\\">amour charnel chrétien</a>. Notre <a traget=\\"_blank\\" href=\\"/\\" title=\\"relation charnelle chrétien\\">réseau-social</a> permet à des <strong>chrétiens</strong> de <strong>se rencontrer</strong> sur divers plans d''activité afin de <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne\\" title=\\"partager ses convictions chrétiennes\\">partager et approfondir sa foi chrétienne</a>.<br>Regarder les propositions d''activité à venir, faire un choix, demander à y participer, attendre l''acceptation, et le tour est joué. Vous pouvez bien sûr proposer votre propre <a traget=\\"_blank\\" href=\\"//jesus-christ-foi-chretienne#!amour-chretien-relation-amitie-avec-jesus\\" title=\\"Activités chrétienne près de chez vous\\">activité de rencontre chrétienne</a>.<br>Vous pouvez expérimenter de nouvelles expériences comme des retraites spirituelles silencieuses, tout comme pratiquer vos <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!amour-chretien-relation-amitie-avec-jesus=rejoindre-activite-chretienne\\" title=\\"Rencontrer ami(e) chrétien\\">activités chrétiennes</a> de d''habitude mais avec des personnes que vous ne connaissez pas.<br>Le but ultime de cette section est d’épanouir le <a traget=\\"_blank\\" href=\\"/\\" title=\\"Un réseau social chrétien pour les fidèles de Jésus\\">fidèle chrétien dans sa foi</a> à travers la <a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!amour-chretien-relation-amitie-avec-jesus=creer-activite-chretienne\\" title=\\"Créer une activité avec des chrétiens\\">création de relations social</a>, et de faire vivre l''<a traget=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne\\" title=\\"Jésus vient nous sauver\\">agneau de Dieu</a> au sein de ses relations nouvelle.<br>jesus-christ.tv, un <strong>réseau social</strong> qui <strong>partage la foi en Christ</strong> !"}', '', '', '', '', '', ''),
(34, 'charite_accueil_text', '', '"<a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne\\" title=\\"mère de la charité chrétienne\\">La Vierge de la charité</a>, <a traget=\\"_blank\\" href=\\"https://fr/wikipedia.org/wiki/Mariologie\\" title=\\"Concile vatican II\\">Marie de Nazareth</a>, est la Reine de la dernière vertu théologique chrétienne : <a traget=\\"_blank\\" href=\\"mariemeredelacharitechretienne.org\\" title=\\"Vertu chrétienne qui porte à désir et à faire le bien du prochain\\">la charité</a>. Ses multiples titres incalculables, dont la <a traget=\\"_blank\\" href=\\"https://fr/wikipedia.org/wiki/Théokotos\\" title=\\"Mère de Dieu\\">Mère de l''humanité</a>, découlent bien souvent de cette <strong>vertu chrétienne</strong>.<br>La <strong>justice</strong>, la<strong> bonté</strong> et l''<strong>amour de Dieu</strong>, sont les 3 symboles clés de <strong>la charité chrétienne</strong> inspiré par celle qui est la <strong>co-rédemptrice</strong>.<br>A ce titre, sa charité est un modèle pour la <strong>mission de l''église</strong> et la vie de ses fidèles, à l''exemple mythique de l''épisode de \\"<strong>la visitation</strong>\\" à sa cousine élisabeth, ou de son intercession aux <strong>noces de Cana</strong>.<br>La <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule\\" title=\\"Organiser des oeuvres de charité\\">charité chrétienne<a traget=\\"_blank\\"> sur <a traget=\\"_blank\\" href=\\"/\\" title=\\"Chrétienté des temps modernes, réseau-social\\">jesus-christ.tv</a>, C''EST ICI !! Chacune des actions suivantes à été pensée afin d''être facilement organisable à partir de simples annonces : Organiser une <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule\\" title=\\"Altruisme et philantropie sur jesus-christ.tv\\">oeuvre de charité</a> (ex: <strong>obole</strong>); organiser des <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!solidarite-chretienne-sainte-mere-nature-bienfaisante\\" title=\\"promotion de la justice et la compassion\\">actions de solidarité</a> (ex: <strong>visiter les malades</strong>); ou organiser des <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!actions-sociales-soutien-chretien-oeuvres-paix-maire\\" title=\\"Bienfaisances et caritas, ensemble nous pouvons déplacer des montagnes\\">action sociales</a> de grande ou moyenne envergure (ex: <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!actions-sociales-soutien-chretien-oeuvres-paix-marie=rejoindre-action-sociale\\" title=\\"Humilité, indulgence, tolérance\\">créer un manifestation</a>/<strong>retraite de prière</strong>). Enfin, les <strong>ONG chrétiennes</strong> de tout horizon peuvent proposer des <a traget=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!moisonner-les-ames-benevolat-ong\\" title=\\"Humilité, indulgence, tolérance\\">postes de bénévolat</a> à ceux d''entre vous qui souhaitent s''engager d''une manière ou d''une autre <strong>au service d''autrui</strong>.<br>Ne soyez pas timide et ouvrez votre coeur à celui de la Très Sainte Vierge Marie sur ce <strong>réseau social chrétien</strong>."', '', '', '', '', '', ''),
(35, 'charite_menu_gauche', '', '{"lien0":{"html":"Charité","href":"#!action-chretienne-aider-prochain-coeur-immacule","title":"Par l''intersession de la vierge marie, programmer une action caritative"},"lien1":{"html":"Solidarité","href":"#!solidarite-chretienne-sainte-mere-nature-bienfaisante","title":"La solidarité est une forme d''altruisme que la chrétienté moderne doit restaurer"},"lien2":{"html":"Actions sociales","href":"#!actions-sociales-mouvements-envergures-chretiens","title":"Manifestation, projet de loi, mouvement social contestataire, message politique, agissant dans la charité de Marie"},"lien3":{"html":"Bénévolat","href":"#!ong-servir-son-prochain-benevolat","title":"Se connecter à la Vierge Marie et donner de son temps et de ses efforts pour autrui"},"lien4":{"html":"Aumônes","href":"#!altruisme-philantropie-aumone-obole-chretienne","title":"Pour le site jésus-christ .tv ou son créateur, pour ses membres ou pour une ONG, ouvrir votre coeur et donner ce qui pourrai aider l''oeuvre Trinitaire"},"lien5":{"html":"Jesus-chrsit.tv","href":"#!promotion-universel-de-jesus-christ-tv-vierge-marie","title":"Laissez la Sainte Vierge Marie vous guider pour faire connaître l''oeuvre de son fils Jésus-Christ à travers ce réseau social"}}', '', '', '', '', '', ''),
(37, 'charite_tpls', '', '{"ajouteur_c":" a ouvert l''oeuvre pour avoir lieu le ","a":" à : ","dit":" dit ","dit_":"lire description","stats":"Statistiques","stats_":" membres inscrits.","share":"Partager sur ","join":"Joindre","join_":"S''inscrire à la liste des participants de l''oeuvre caritative","unjoin":"Se désinscrire","unjoin_":"Ne plus participer à l''oeuvre caritative","talk":"Conversation","talk_":"Participer à la conversation de l''oeuvre caritative","talk_t_ph":"Ecrire quelque chose ici","bourse":"Bourse","bourse_":"Afficher la bourse de cette oeuvre caritative","benevolat_button":"Voir l''annonce","benevolat_blank":"Ouvrir l''annonce en pleine page","b_p_btn0":"Envoyer","b_p_btn1":"Charger Cv ou Lm","b_p_btn1_":"Charger Curriculum vitae ou Lettre de motivation","already":"Vous avez déjà postulé à ce poste."}', '', '', '', '', '', ''),
(38, 'charite_forms', '', '{"generals":{"add_i":"Ajouter image","or":" (ou en proposer une)","clic_h":"cliquer ici"},"_1":{"titre":"Choisir un titre et/ou une image","label":"Donner un titre à votre ","label_":"Vous pouvez ajouter une image de couverture à votre annonce"},"_2":{"titre":"Choisir une ","label":"Faites votre choix parmi la liste suivante..","label_":"..ou entrer ici le type de votre ","ph":"..votre propre choix.."},"_3":{"titre":"Choisir un jour et une heure","label":"Entrer un jour","label_":"Entrer une heure"},"_4":{"titre":"Indiquer votre pays, le nom de votre ville, et un lieu de rdv dans la ville","label":"Choisir votre pays","label_":"Entrer votre pays","label__":"Entrer votre ville","label___":"Entrer un lieu de rdv dans la ville","ph":"Votre pays","ph_":"Votre ville","ph__":"ex: rue charpentier, devant l''église.."},"_5":{"titre":"Faite une description de ce que vous voulez concrètement faire","label":"A propos de votre ","ph":"ex: L''action consiste en ...."},"_6":{"titre":"Ajoutez une bourse (optionnel)","label":"Identifiant de la bourse","ph":"jHgf5tg8","label_":"Choisir le montant que vous souhaiter pour la quotisation de la bourse (0euro par défaut)","a":"Créer une bourse"},"_7":{"titre":"Valider","label":"J''ai lu et j''approuve la charte de jesus-christ.tv","btn0":"Prévisualiser","btn1":"Enregistrer","btn2":"Soumettre"}}', '', '', '', '', '', ''),
(39, 'charite_forms_', '', '{"_0":"oeuvre de charité","_0_":"charité","_0_ph":"ex: Un repas copieux en faveur des sans-abri","_0_opt0":"Don de vêtements","_0_opt1":"Don de nourriture (repas organisé)","_1":"action de solidarité","_1_ph":"Réparons ensemble les erreurs des hommes","_1_opt0":"Soutien moral","_1_opt1":"Solidarité écologique","_2":"action sociale","_2_ph":"Ecouter et trouver des solution aux problèmes des désespérés","_2_opt0":"Sauver des âmes (évangélisations)","_2_opt1":"Journée organisé en faveur des démunis (ex:sortie à la plage)","_2_opt2":"Mouvement de contestation/Manifestation","_2_opt3":"Manisfesté la foi en Jésus","_3":"bénévolat","_3_":"acte bénévole","_4":"aumône","_4_":"oeuvre d''aumône","_4__":"don de charité","_5":"promotion","_5_":"auto-promotion"}', '', '', '', '', '', '');
INSERT INTO `_text` (`id`, `username`, `opt`, `fr`, `en`, `es`, `de`, `cn`, `jp`, `ar`) VALUES
(40, 'charite_oc_accueil', '', '{"btn_0_html":" Organiser une oeuvre caritative","btn_0_title":"La vierge marie nous dnas le vortex de sa bonté","btn_0_href":"#!action-chretienne-aider-prochain-coeur-immacule=creer-oeuvre-caritative","btn_1_html":" Voir les oeuvres de charité en cours","btn_1_title":"Participer à une oeuvre de charité sous la vigilence de la vierge marie","btn_1_href":"#!action-chretienne-aider-prochain-coeur-immacule=rejoindre-oeuvre-caritative-chretien","mult_src":"bottom.jpg","mult_alt":"la mère de jésus nous enseigne la charité sur jesus-christ.tv","mutl_title":"Rencontrons la vierge marie et l''infinie bonté de son coeur immaculé","p":"<h2>Charité chrétienne : Soeur Bernadette, Vincent de Paul, Mère Thérésa</h2><p><a target=\\"_blank\\" href=\\"www.caritas.org\\" title=\\"la charité internationnale\\">Cartitas</a>, mot latin désignant la <a target=\\"_blank\\" href=\\"https://wikipedia.org/wiki/Charité\\" title=\\"organisations internationnales pour pratiquer la charité chrétienne\\">3ième vertu théologique chrétienne</a>, est par excellence la <strong>foi en action</strong>. Pratiquer la <strong>charité au quotidien</strong>, même dans la plus basse de ses dimensions, aide à se sentir en état de bonheur, permet de conserver des <strong>pensées positives</strong>, mais surtout de servir d''exemple pour nos proches.<br><a target=\\"_blank\\" href=\\"/\\" title=\\"réseau social chrétien\\">jesus-christ.tv</a> met à la disposition de ses membres deux services interdépendants : un outils de <a target=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=creer-oeuvre-caritative\\" title=\\"Créer des annonces pour insiter les fidèles à pratiquer la charité\\">création d''annonce</a> de proposition d''<strong>action caritative</strong>, et un outils de <a target=\\"_blank\\" href=\\"/vierge-marie-charite-chretienne#!action-chretienne-aider-prochain-coeur-immacule=rejoindre-oeuvre-caritative-chretien\\" title=\\"Participer à des oeuvres de charité sur jesus-christ.tv\\">vulgarisation et de participation</a> de ces annonces.<br>Si vous avez des suggestions à apporter pour rendre ses deux outils plus efficient, <a target=\\"_blank\\" href=\\"#!\\" title=\\"proposer suggestion pour améliorer l''expérience jesus-christ.tv\\">merci de cliquer ici</a></p>"}', '', '', '', '', '', ''),
(42, 'charite_s_accueil', '', '{"btn_0_html":" Créer une action de solidarité n''importe où dans le monde","btn_0_title":"Grâce à la vierge marie nous avons le pouvoir de guérir les méfaits des hommes","btn_0_href":"#!solidarite-chretienne-sainte-mere-nature-bienfaisante=creer-action-solidarite","btn_1_html":" Rejoindre une action de solidarité près de chez vous","btn_1_title":"Participer à une action de solidarité pour sauver mère de la nativité","btn_1_href":"#!solidarite--chretienne-sainte-mere-nature-bienfaisantes=rejoindre-action-solidarite","mult_src":"bottom.jpg","mult_alt":"Réparations des blessures avec la vierge des douleurs","mutl_title":"Pratiquons l''entraide et la solidarité avec Marie la Mère de l''humanité","p":"<h2>L''acte de solidarité est une preuve de compassion, vertu essentiel pour évoluer</h2><p>Pour un chrétien la <strong>solidarité</strong> est la traduction d''une <strong>exigence évangélique</strong>, celle de l''<strong>amour</strong> porté aux dimensions du monde actuel en marche vers une <strong>unification</strong>. \\"Que celui qui aime Dieu aime son prochain\\" disait le Christ. Et bien celui qui <a href=\\"www.saintebible.com/matthew/22-39.html\\" title=\\"Commandement de Jésus\\">aime son prochain</a> aime aussi notre planète la Terre qui nous nourri et protège, ainsi les <a href=\\"/vierge-marie-charite-chretienne#!solidarite-chretienne-sainte-mere-nature-bienfaisante\\" title=\\"Fraternité des âmes humaine\\">actes de solidarité</a> que l''on peut faire naître sur <a href=\\"/\\" title=\\"Réseau social chrétien\\">jesus-christ.tv</a> sont destinés à <a href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"Le temple de Dieu\\">Dieu</a>, l''Humanité et notre belle planète Terre.<br>Si vous avez des suggestions à apporter pour rendre ses deux outils plus efficient, <a target=\\"_blank\\" href=\\"#!\\" title=\\"proposer suggestion pour améliorer l''expérience jesus-christ.tv\\">merci de cliquer ici</a></p>"}', '', '', '', '', '', ''),
(43, 'charite_as_accueil', '', '{"btn_0_html":" Créer une action sociale n''importe où dans votre pays","btn_0_title":"En grand nombre, la vierge marie écoute nos attentes","btn_0_href":"#!actions-sociales-soutien-chretien-oeuvres-paix-marie=creer-action-sociale","btn_1_html":" Rejoindre les rangs d''une action sociale","btn_1_title":"Afficher les actions sociale en cours","btn_1_href":"#!actions-sociales-soutien-chretien-oeuvres-paix-marie=rejoindre-action-sociale","mult_src":"bottom.jpg","mult_alt":"Doctrine social du mouvement chrétien","mutl_title":"Actions sociales sur jesus-chrsit.tv","p":"<h2>Les actions sociales dans l''amour à la Vierge Marie</h2>L''<strong>action sociale chrétienne</strong> désigne l''ensemble des moyens mis à la dispositions des fidèles pour agir sur leur entourage, préserver la cohésion de la <strong>communauté chrétienne</strong> autour d''eux, amplifier la <strong>foi au Dieu Trinitaire</strong>, et susciter des <a href=\\"/dieu-le-pere-esperance-chretienne#!Dieu-le-pere-sauve-par-conversion-chretienne\\" title=\\"\\">conversions chrétiennes</a> dans leur entourage. Le terme <strong>action social</strong> définit relativement les même notions cités ci-dessus mais sans orientation religieuse, ainsi les <a href=\\"/vierge-marie-charite-chretienne#!solidarite--chretienne-sainte-mere-nature-bienfaisantes=rejoindre-action-solidarite\\" title=\\"Créer une action sociale sur jesus-christ.tv\\">dispositifs d''action sociale</a> de la société civile sont greffés sur la section \\"action sociale\\" de <a href=\\"/\\" title=\\"Réseau-social chrétien\\">jesus-chrsit.tv</a>.<br>Si vous avez des suggestions à apporter pour rendre ses deux outils plus efficient, <a target=\\"_blank\\" href=\\"#!\\" title=\\"proposer suggestion pour améliorer l''expérience jesus-christ.tv\\">merci de cliquer ici</a>"}', '', '', '', '', '', ''),
(44, 'charite_aumone', '', '{"img":{"src":"imgs/ex-jesus-christ-aumone.jpg","alt":"aumône matérielle, aumône spirituelle","title":"L''aumône n''est pas facultatif, c''est un ordre divin"},"h2":"L''offrande à Dieu, à l''oeuvre du Chrsit et à ses fidèles","btn0_":"Don pour le webmaster de jesus-christ.tv","btn1_":"Don pour l''oeuvre caritative de jesus-christ.tv","btn2_":"Don pour la bourse d''un membre","btn3_":"Ouvrir une bourse pour une activité caritative","coordonnees":{"p":"Entrez l''identité de votre personne physique ou moral :","_0":"Raison sociale de l''organisation donatrice (optionnel)","_1":"Civilité","_2":"Nom","_3":"Prénom","_4":"E-mail","_5":"Téléphone"},"sepa":"<div class=''paiement''>Voici les coordonnées du compte SEPA : ","bancaire":"<div class=''paiement''>Voici les coordonnées du compte bancaire : ","mobile_money":"<div class=''paiement''>Voici le numéro de téléphone du compte mobile money: ","cheque":"<div class=''paiement''>Voici l''adresse à laquelle envoyer le chèque : ","cheque_":"<br>Et l''ordre à entrer dans le chèque : ","webmaster":{"sepa":["8978687687877"],"bancaire":["achi","897768767867987678"],"mobile":["8987677898"],"cheque":["achi","20 rue de la tourette"],"label":"J''entre ma promesse de don pour le webmaster : ","ph":"montant libre. ex:100€","h4":"Les coordonnées pour le règlement sur un compte du webmaster : "},"o_bourse":{"label":"Entrez l''identifiant de la bourse ci-dessous à 6 chiffre (il sera inscript dans vos données personnelles) : "},"bourse":{"sepa":["8978687687877"],"bancaire":["achi","897768767867987678"],"mobile":["8987677898"],"cheque":["achi","20 rue de la tourette"],"p":"Le fonctionnement de l''approvisionnement des bourse est simple. L''argent que vous déposez pour la bourse d''une oeuvre est temporairement sur les comptes de jesus-christ.tv jusqu''à ce que l''oeuvre soit terminé. Alors, le titulaire de l''oeuvre en question peut, dans un premier temps connaitre le montant total récolté en temps réel et ainsi réaliser les dépenses pour son oeuvre fonction de ça, et dans un second temps peut se rapprocher auprès du service comptable de jesus-chrsit.tv pour récupérer la somme total (-1euro pour frais de dossier) après que l''oeuvre soit réalisée. Ainsi les oeuvres sont financées par les titulaires avant d''être remboursé de la somme récolté sur leur bourse.","label":"Entrez l''identifiant de la bourse : ","ph":"identifiant de la bourse","label_":"Entrez le montant de votre promesse de don : ","ph_":"promesse du montant, ex: 100€","h4":"Les coordonnées pour le règlement sur la bourse du membre : "},"jesuschristtv":{"sepa":["8978687687877"],"bancaire":["achi","897768767867987678"],"mobile":["8987677898"],"cheque":["achi","20 rue de la tourette"],"participation_h4":"Choisissez un moyen de nous aider dans l''oeuvre que nous souhaitons opérer pour le monde au nom de jésus : ","label":"Je donne chaque mois","ph":"montant libre/mois","label_":"Je donne une fois","ph_":"montant libre. ex:100€","h4":"Les coordonnées pour le règlement sur nos comptes : "},"btn0":{"html":"Je donne par prélevement SEPA (Rib)","href":"#!","title":"etc"},"btn1":{"html":"Je donne par carte bancaire","href":"#!","title":"etc"},"btn2":{"html":"Je donne par virement mobile money","href":"#!","title":"etc"},"btn3":{"html":"Je donne par chèque","href":"#!","title":"etc"}}', '', '', '', '', '', ''),
(45, 'charite_benevolat_form', '', '{"h2":"Créez un service bénévol à l''attention des internautes du site","_1":{"titre":"Identifier son ONG","label":"Donner le nom de votre OrganistoinNonGouvernementale","ph":"ex: La croix rouge"},"_2":{"titre":"Choisir un titre et/ou une image","label":"Donnez un titre au service bénévol","ph":"ex: L''aide médical en afrique de l''ouest","label_":"Vous pouvez ajouter une image (votre logo) à votre annonce"},"_3":{"titre":"Choisir le secteur d''activité du service bénévol","label":"Secteur d''activité","ph":"Choisir une catégorie ici","opt0":"ecemple 0"},"_4":{"titre":"Lieu d''action du service bénévol","label":"Choisir le pays","ph":"Choisir le pays ici, ou entrer-le ci-dessous","label_":"Entrer le pays","ph_":"Pays","label__":"Entre la ville","ph_":"Ville"},"_5":{"titre":"La durée de la mission bénévol","label":"Choisir une date de début..","label_":".. et une date de fin"},"_6":{"titre":"Les horaires de travail du bénévol","label":"Du Lundi au Vendredi","ph":"08h-12h45 || 14H-18h30","p":"ou, horaires différentes par jour","l":"Lundi","m":"Mardi","me":"Mercredi","j":"Jeudi","v":"Vendredi","s":"Samedi"},"_7":{"titre":"Entrer le nombre de postes à pourvoir","label":"Nombre de postes", "ph":" postes à pourvoir"},"_8":{"titre":"Description générale du service bénévol, précisions sur le service et qualifications recherchées","label":"Description concise du service"}}', '', '', '', '', '', ''),
(46, 'charite_auto_promo', '', '"<h2>Nous souhaitons que <a href=''/''>http://jesus-christ.tv</a> soit un réseau-social rapidement connu dans le monde entier, aidez nous !</h2><p>Pour ce faire nous avons réalisé des actions préparé pour que vous tous puissiez nous aider à nous promouvoir dans le monde entier</p><p>Voici une liste des ''actions préparés'' que nous avons réalisés pour vous :</p><ul class=''safe''><li><a href=''#''>Partager sur les réseaux sociaux, ou par e-mail de petits textes</a></li><li><a href=''#''>Imprimer des quelques flyers à distribué dans votre région</a></li><li><a href=''#''>Imprimer une affiche à coller sur une porte, un arrêt de transport en commun, un mur ...</a></li></ul><p>Nous espérons dans la <a href=\\"/vierge-marie-charite-chretienn\\" title=\\"Mère de l''humanité, mère de la charité\\">Sainte Vierge Marie</a> que vous nous aiderez, et que cela aura du succès <strong>pour la gloire de Dieu et le Salut du monde</strong>. MERCI :!</p><p>L&acute;équipe jesus-christ.tv <span class=''signature''></span></p><ul></ul> "', '', '', '', '', '', ''),
(48, 'charite_b_accueil', '', '{"btn_0_html":" Vous êtes une ONG","btn_0_title":"Entrer des annonces d''emploi bénévole sur la plateforme du fils de marie de nazareth","btn_0_href":"#!travailler-gratuit-benevolat-ong=creer-annonce-benevolat","btn_1_html":" Joindre un service bénévol","btn_1_title":"En faisant du bénévolat, vous attirez les grâces de la vierge marie sur vous et votre entourage","btn_1_href":"#!travailler-gratuit-benevolat-ong=rejoindre-action-benevole","mult_src":"bottom.jpg","mult_alt":"Frère et soeur en Marie la Vierge Missionnaire","mutl_title":"La chrétienté au service de l''Humanité","p":"<h2>La mission du chrétien : être le serviteur de son prochain à l''image du Christ pour ses apôtres</h2><p>Un jour, une semaine, un mois, durant toute une année, <a href=\\"/vierge-marie-charite-chretienne#!travailler-gratuit-benevolat-ong=rejoindre-action-benevole\\" title=\\"faire un travail bénévol sur jesus-christ.tv\\">mettre ses compétences et ses capacités aux services  d''un organisme humanitaire</a> présent sur <a href=\\"/\\" title=\\"réseau-social chrétien jesus-christ.tv\\">jesus-christ.tv</a>. L''<a href=\\"/vierge-marie-charite-chretienne#!travailler-gratuit-benevolat-ong\\" title=\\"Des actions collectives et des actes d''amour maternel au quotidien\\">acte bénévole</a> est une bouffé d''oxygène pour beaucoup de ses pratiquants car l''atmosphère qui y règne est séparé de celui du reste du monde (compétitif et égocentrique), et mieux, est en connexion avec l''<a href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"L''être suprême, omnipotent omniprésent et omniscient\\">esprit de Dieu</a>, l''<strong>esprit d''Amour</strong>. C''est une marque de <a href=\\"/vierge-marie-charite-chretienne\\" title=\\"prendre pour modèle la mère de la charité\\">charité marial</a> que d''<a href=\\"biblique.overblog.com/2015/08/le-service-chretien.html\\" title=\\"Jésus est le serviteur parfait, l''exemple à suivre\\">offrir ses services</a>, et la mère du christ vous encouragera dans ce <strong>chemin vertueux</strong>. Voyager, rencontrer d''autres cultures, apprendre auprès des autres, <a href=\\"/jesus-christ-foi-chretienne\\" title=\\"Foi chrétienne en Jésus-Christ\\">affermir sa foi</a>...tout cela se retrouve dans le <strong>service bénévole</strong>.<br>Si vous avez des suggestions à apporter pour rendre ses deux outils plus efficient, <a target=\\"_blank\\" href=\\"#!\\" title=\\"proposer suggestion pour améliorer l''expérience jesus-christ.tv\\">merci de cliquer ici</a></p>"}', '', '', '', '', '', ''),
(49, 'esperance_accueil_text', '', '"De l''<strong>ancien testament</strong> au nouveau, <strong>Le créateur</strong> allume en ses croyants une <a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"Miséricorde divine\\">étincelle d''espoir</a>. C''est une <strong>espérance</strong> qui déplace des montagnes. En effet cette forme de <strong>confiance</strong> apporte force, réconfort, joie, épanouissement ainsi que prospérité à ces serviteurs présents dans la <a target=\\"_blank\\" href=\\"/https://wikipedia/\\" title=\\"Le logos\\">sainte bible</a>. <a target=\\"_blank\\" href=\\"/https://wikipedia/\\" title=\\"\\">L''espoir en l''éternel</a> ici bas sur Terre, c''est surtout <strong>espérer</strong> d''être approché par Lui ou ses <strong>puissances divines</strong>, au delà de la vie, c''est aussi l''<a target=\\"_blank\\" href=\\"/https://wikipedia/\\" title=\\"\\">espoir d''atteindre le Paradis</a>, et donc <a target=\\"_blank\\" href=\\"/https://wikipedia/\\" title=\\"\\">la vie éternel</a> dans un <strong>royaume de gloire</strong>. Ainsi dans tous les cas, <strong>espérer en Dieu</strong> c''est <a target=\\"_blank\\" href=\\"/https://wikipedia/\\" title=\\"\\">croire en sa miséricorde</a>, dans le fait que nous Lui somme précieux et qu''il est donc présent dans le plus profond de notre coeur.<br>Vous trouverez surtout dans cette section de <a target=\\"_blank\\" href=\\"/\\" title=\\"Réseau social chrétien\\">jesus-christ.tv</a> des témoignages, témoignages de <a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!Dieu-le-pere-sauve-par-conversion-chretienne\\" title=\\"Jésus transcende les barrière des religions\\">conversions à la foi chrétienne</a>, témoignages d''expérience de vie, de <a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!dieu-fait-miracles-dans-vies-grace-esprit-saint\\" title=\\"La sainte Trinité chrétienne opère légion de miracles\\">miracles trinitaire</a>, et de <strong>foi de fidèles chrétiens</strong> toutes confessions confondus; mais vous trouverez aussi de quoi <strong>pratiquer l''amour</strong>, l''<strong>amour pour vous</strong>, l''<strong>amour pour vos proches</strong>, et l''<a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!dieu-donne-force-changer-le-monde\\" title=\\"Aider la chrétienté à changer le monde dans la grâce Divine\\">amour pour le monde</a>. Tout ceci afin de <strong>faire espérer en Dieu</strong> un plus grand nombre d''êtres humains."', '', '', '', '', '', ''),
(50, 'esperance_menu_gauche', '', '{"lien0":{"html":"Changer le monde","href":"#!dieu-donne-force-changer-le-monde","title":"Utilisons, ENSEMBLE, comme frères en Jésus-christ, les pouvoir que Dieu nous a donné pour changer la mauvaise situation que traverse mon époque"},"lien1":{"html":"Miracles&Témoignage","href":"#!dieu-fait-miracles-dans-vies-grace-esprit-saint","title":"Livrer son témoignage, et lire le témoignage des frères chrétiens, qui ont re_u un miracle du Dieu Trine dans leur vie"},"lien2":{"html":"Conversions chrétienne","href":"#!Dieu-le-pere-sauve-par-conversion-chretienne","title":"Tour d''horizon des raison pour lesquelles les membres d''autre relitions se tournent vers celle de l''Amour Trinité"},"lien3":{"html":"Guérir avec Jésus","href":"#!prions-dieu-le-fils-pour-guerir","title":"Dieu nous a dit qu''en son nom nous ferons des miracle, ayons foi et agissons en sa volonté"}}', '', '', '', '', '', ''),
(51, 'esperance_sauver', '', '"<h2 class=''''>Les premiers seront les derniers</h2><p style=''display:block;''>Notre monde est en péril, sur fil du rasoir, comme si l&acute;apocalyse était sur le point de s&acute;accomplir.<br>Seule l&acute;Amour de notre seigneur Jésus-Christ peut nous sauver, l&acute;Amour sans frontière qu&acute;il est venu nous inculqué comme à de petits enfants.<br>Dans notre monde d&acute;adulte, les règles d&acute;amour doivent passer par un accord commun sur la manière d&acute;appliquer cette amour. La discution est un facteur clé pour nous orienter dans la bonne direction tout droit vers l&acute;Amour de Jésus pour notre planète et ses habitants.<br>Ce n&acute;est pas un idéal, c&acute;est une règle de vie qu&acute;Il nous a donné, Aimer notre prochain qu&acute;il soit pierre plante animal ou être humain, comme notre propre corps et esprit.<br>Moi, webmaster de jesus-christ.tv, ai pour ambition depuis tout petit, face à ce monde dure et hostile où le respect d&acute;autrui semble régit par des règle semblants immuables mais nous échappants pour la pluspart, vouloir me sacrifier afin de changer ce monde. Maintenant agée de 30ans, après avoir traversé le chemin que Dieu m&acute;a réservé, j&acute;ai enfin compris la manière simple d&acute;accéder à mon sacrifice avec succès : entrainer la chrétienneté avec et devant moi, dans l&acute;application du message d&acute;Amour de Jésus pour le monde entier, en créant un chemin vers Lui combinant : foi, espérance et charité; dit autrement : travail, prière, vie communautaire, aides aux plus démunis et dons pécunier.<br>Mon objectif est de créer une ONG qui se répandra dans le monde entier années après années pendant près d&acute;un siècle, faisant appel aux dons pécuniers des chrétiens de part le monde pour</p><ul class=''safe''><li>nourrir, loger et faire travailler (remettre en activité) quotidiennement les plus démunis,</li> <li>pour élaborer des plans de construction de routes butimés et de chemins férrés dans les pays implantés,</li> <li>pour élaborer des plans d&acute;alimentation et de construction de réseaux électrique dans les pays implantés,</li> <li>pour créer des fermes agro-pastorales auto-alimentés et productrices de richesses secondaire voir tertiaire, mélangeants des innovations et des techniques du monde entier afin d&acute;éviter les mauvais penchants des fermes déjà existantes (insecticides, malnutrition etc),</li> <li>pour élaborer des plans d&acute;exploitation d&acute;agriculture à but industrielle et utiles dans l&acute;évolution des ONG déjà implantés de part le monde(type cacaos, vins, bio-carburants etc),</li> <li>et enfin pour développer des industries exploitants des richesses minières dans les pays implantés et non en guerre que les gouvernements de ces pays n&acute;auraient pas les moyens d&acute;exploiter, afin d&acute;en tirer des bénéfices, afin de se défaire des dons pécuniers chrétiens  de un, de pouvoir développer d&acute;autres industries minières dans le même ou dans d&acute;autres pays du monde de deux, et de trois d&acute;établir des plans de redistribution de ces bénéfices au sein de la population locale.</li></ul><p class=''text-center''>Comme dit plus-haut, la conversation est primodiale pour accéder au chemin d&acute;Amour que Jésus-Christ a ouvert pour nous. C&acute;est pourquoi j&acute;ouvrir une zone de discussion à thème avec le bouton ci-dessous : <br><button class=''ui button'' onclick=''$(this).closest(`div`).find(`.nodisplay_`).slideToggle()''>Accéder aux discussions</button></p><div class=''nodisplay_ bg-whites''><h2 class=''''>Zone de discution libre et ouverte afin de trouver un moyen de changer le monde</h2><ul class=''safe''>Tous les sujets du discutions ouverts<li class=''more''><i class=''glyphicon glyphicon-plus''></i></li><li class=''add''><i class=''glyphicon glyphicon-pencil''></i></li></ul><ul class=''safe''>Tous les sujets du discutions terminés<li class=''more''><i class=''glyphicon glyphicon-plus''></i></li></ul><div><div id=''discuss_messages''><p></p><textarea class=''form-control'' onkeyup=''recherche l&acute;appuie sur &acute;entré&acute;''></textarea></div></div>"', '', '', '', '', '', ''),
(52, 'esperance_type_0', '', '{"temoignage":"Rendre témoignage ","filtre":"Filtrer les résultats :","m":{"_0":" à votre témoignage de miracle"},"_1":{"titre":"Choisir un titre","label":"Donner un titre","ph":"J''étais triste je suis heureux..."},"_3":{"titre":"Rendre votre témoignage","label":"Rendre votre témoignage ici"},"_4":{"titre":"Valider","label":"J''ai lu et j''approuve la charte de jesus-christ.tv","_0":"Prévisualiser","_1":"Enregistrer","_2":"Soumettre"},"shares":{"share":"Partagé ","times":"fois","added":"ajouté par","amen":"Amen","hosanna":"Hosanna","alleluia":"Alleluia"},"talk":"Conversation","talk_":"Participer à la conversation de l''oeuvre caritative","talk_t_ph":"Ecrire quelque chose ici","lire_suite":"Lire la suite"}', '', '', '', '', '', ''),
(53, 'esperance_type_miracles', '', '{"h2":"Les miracles dans la communauté chrétienne","type1":" d''un miracle","filtre0":"Argent","filtre1":"Travail","filtre2":"Foi","filtre3":"Guérison","filtre4":"Situation","filtre5":"Autre","filtre9":"Tout","form_titre_2":"Le type du miracle","form_label_2":"Choisir la nature de votre miracle, ou l''écrire en-dessous","form_ph_2":"Choisir le sujet"}', '', '', '', '', '', ''),
(54, 'esperance_type_conversions', '', '{"h2":"Les conversions chrétiennes de par le monde","type1":"de votre conversion","filtre0":"Athée","filtre1":"Animiste","filtre2":"Musulman","filtre3":"Boudhiste","filtre4":"Hindouîste","filtre5":"Autre","form_titre_2":"Religion d''origine","form_label_2":"Choisir votre ancienne religion avant votre conversion chrétienne","form_ph_2":"Choisir la religion"}', '', '', '', '', '', ''),
(55, 'esperance_guerir', '', '"<h2>Guérir vos frères & soeurs dans le nom de Jésus</h2><h3><strong>Prêtres</strong>, <strong>chrétiens de GRANDE foi</strong>, ce message est pour vous</h3><cite>En vérité, en vérité, je vous le dis, celui qui croit en moi fera aussi les œuvres que fais, et il en fera de plus grandes, parce que je m''en vais au Père; et tout ce que vous demanderez en mon nom, je le ferai, afin que le Père soit glorifié dans le Fils.</cite> <a target=\\"_blank\\" href=\\"http://saintebible.com/john/14-12.htm\\" title=\\"Citation bible : Jésus enseigne\\">Jean 14:12-13</a><br><br><p>Aujourd&acute;hui, peu sont les prêtres et les laïcs qui osent s&acute;aventurer <strong>derrière Jésus</strong>, à savoir opérer <a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne#!dieu-fait-miracles-dans-vies-grace-esprit-saint\\" title=\\"Jésus opère encore des miracles aujourd''hui\\">des miracles</a> en son nom et celui du Père.<br>Ce menu est fait pour vous qui avez les compétences de vie pour le faire (mais qui n''osez pas), que cela soit par l&acute;instruction reçu au séminaire ou par celle de la vie qui a GRANDI votre foi, de <a target=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne#!prions-dieu-ensemble-paix-monde\\" title=\\"La prière, acte d''amour, sanctifie l''âme\\">prier pour vos frères</a> en difficultés ou en mauvaise santé et cela dans le nom de <strong>notre seigneur Jésus-Christ</strong>.<br>Ce menu est fait pour nous rendre compte de notre peu de foi aux dires de notre seigneur, et pour nous inciter à \\"se jeter à l&acute;eau\\", l''eau de l&acute;<strong>océan des miracles</strong> venus des cieux pour <strong>sauver nos âmes</strong>.</p><p><h4>Le mode de fonctionnement de ''Guérir avec Jésus'' est simple</h4>il suffit en effet, chaque jour que <a target=\\"_blank\\" href=\\"/dieu-le-pere-esperance-chretienne\\" title=\\"Dieu est Espoir, Dieu est Amour\\">Dieu</a> fait, d&acute;actualiser le nombre de fois que nous avons <strong>prier pour notre prochain</strong> en difficulté (<strong>chrétien</strong> musulman ou païen) dans la ferme foi en le nom sauveur de notre <strong>seigneur Jésus-Christ</strong>.<br>Pour permettre à tous nos frère de voir la <a target=\\"_blank\\" href=\\"/jesus-christ-foi-chretienne\\" title=\\"La foi chrétien en Jésus-Chrsit le Redempteur\\">foi en le nom de Jésus</a> grandir chez un plus grand nombre de prêtres et de laïcs à travers le monde, et pourquoi pas en eux aussi<br>Ceci est faisable en cliquant sur la flèche <i class=''glyphicon glyphicon-plus''></i> ci-dessous, qui actualisera le nombre de fois que nous avons prié pour un frère en difficulté.</p><div style=''text-align:center;'' id=''guerir_plus''><i class=''glyphicon glyphicon-plus'' onclick=''alert(&acute;+1&acute;)''></i><br><span class=''''>vous avez prié pour <span class=''badge''>__0__</span> frères</span><div class=''''>Vos frères ont priés <span class=''badge''></span> fois pour leur prochian en difficulté</div></div><div class=''application_google_map''></div>"', '', '', '', '', '', ''),
(56, '_all_buttons_log', '', '{"_0":{"html":"Veuillez vous logger pour afficher les post du réseau-social","href":"/","title":"Le réseau-social chrétien exclusif jesus-christ"},"_1":{"html":"Veuillez vous logger pour interagir avec réseau-social","href":"/","title":"Le réseau-social chrétien de l''esprit-saint"}}', '', '', '', '', '', ''),
(57, 'esperance_guerir_en_jesus', '[1,1]', '', '', '', '', '', '', ''),
(58, 'esperance_menu_droit', '', '{"p":"jesus-christ.tv souhaite changer le monde grâce à la participation de tous les chrétiens. Ici vous pouvez poster que le blog de l''espoir des informations susceptibles d''aider l''humanité","_1":"Lien d''un d''article","_2":"Lien d''un postcast","_3":"Lien d''une vidéo"}', '', '', '', '', '', ''),
(59, 'all_textes', '', '{"droite":{"send":"Envoyer","save":"Enregistrer","prev":"Prévisualiser","terms":"Termes et condition d''utilisation"}}', '', '', '', '', '', ''),
(60, 'charite_auto_promo_', '', '"[[\\"premier petit texte\\",\\"seconde petit texte\\",\\"et ainsi de suite pour les petits textes\\"],[\\"img0.png\\",\\"img1.png\\",\\"img2.png\\"],[\\"img0.png\\",\\"img1.png\\",\\"img2.png\\"]]"', '', '', '', '', '', ''),
(61, 'esperance_sauver_', '', '"<form action=''/discussions'' method=''POST'' class=''modal_'' id=''sauver_form''><label for=''''>Entrer titre de la discussion</label><input name=''titre'' placeholder=''Le titre de la discussion''><label for=''''>Entrer éventuellement la raison de la discussion</label><textarea name=''p'' max=''500'' placeholder=''Entrer texte 500 caractère maxi''></textarea><input type=''hidden'' name=''ajouteur'' value=''1''><input type=''hidden'' name=''redirect''><input type=''submit''></form>"', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `_varchar`
--

CREATE TABLE IF NOT EXISTS `_varchar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `opt` varchar(255) NOT NULL,
  `fr` varchar(255) NOT NULL,
  `en` varchar(255) NOT NULL,
  `es` varchar(255) NOT NULL,
  `de` varchar(255) NOT NULL,
  `ch` varchar(255) NOT NULL,
  `jp` varchar(255) NOT NULL,
  `ar` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=115 ;

--
-- Contenu de la table `_varchar`
--

INSERT INTO `_varchar` (`id`, `username`, `opt`, `fr`, `en`, `es`, `de`, `ch`, `jp`, `ar`) VALUES
(1, 'foi_accueil_h2', '', '"Le messie, le rédempteur, la deuxième personne de la trinité, nous ouvre les portes de la foi chrétienne vers le vrai Dieu Trinitaire"', '', '', '', '', '', ''),
(2, 'foi_accueil_h3s', '', '["Le verbe de Dieu nous a donné la foi","La croyance en notre salut vient du christ","Le credo, le Notre Père, le je vous salut Marie"]', '', '', '', '', '', ''),
(3, 'foi_accueil_img', '', '{"src":"imgs/jesus-miséricordieux-foi-chretienne.jpg","alt":"Lumière du monde et foi en jesus-christ","title":"Si le chrsit n''est pas ressuscité notre foi est veine."}', '', '', '', '', '', ''),
(4, 'foi_accueil_video', '', '{"src":"tmp0_/Google API oauth flow with node.js.mp4","title":"Le verbe incarné nous offre la célévration de l''eucharistie"}', '', '', '', '', '', ''),
(5, 'foi_accueil_audio', '', '{"src":"tmp1_/92i veyron.mp3","title":"Notre sauveur et rédempteur nous ouvre les portes du paradis"}', '', '', '', '', '', ''),
(6, 'foi_accueil_lien0', '', '{"href":"biblique.blogspirit.com§archive/2010§08/12/la-foi-deèjesus-christ-c-est-tout.html","title":"Sauvés par la grâce au moyen de la foi","html":" La foi de Jésus-Christ, c''est tout!"}', '', '', '', '', '', ''),
(7, 'foi_accueil_lien1', '', '{"href":"www.psjca.net/wp-content/uploads/2016/02/Heb11-1.jpg","title":"La foi est indispensable si l''on veut être agréable à Dieu","html":" Pourquoi suivre jésus-christ aujourd''hui ?"}', '', '', '', '', '', ''),
(8, 'foi_accueil_lien2', '', '{"href":"http://www.fmespoir.fr/wp-content/uploads/2015/07/TROIS-TYPES-DE-FOI.mp3","title":"La foi en jésus-christ, doit se traduire par une vie épanouie, très souvent nous voyons la foi sans les oeuvres","html":" FOI JESUS CHRIST (3 Types de Foi)"}', '', '', '', '', '', ''),
(9, 'foi_accueil_lien3', '', '{"href":"youtube.com/watch?v=--K0ul5i5uw","title":"Gardez la foi en jésus-christ","html":"L''annonce du kérygme"}', '', '', '', '', '', ''),
(10, 'all_menu_h1', '', '"Le titre seo"', '', '', '', '', '', ''),
(11, 'foi_livres_h2', '', '"Livres, prières, homélies. Les apôtres et disciples de Jésus-Christ nous ont transmis le verbe de Dieu."', '', '', '', '', '', ''),
(12, 'foi_livres_h_img', '', '{"src":"imgs/foi/livres/evangiles-nouveau-testament.png","title":"Recueils de prière","alt":"Jésus nous apprend à prier"}', '', '', '', '', '', ''),
(13, 'foi_livres_video', '', '{"src":"files/foi/livres/prier-du-coeur.mp4","title":"Seigneur Jésus-Christ, Fils de Dieu, aie pitié de moi pauvre pécheur."}', '', '', '', '', '', ''),
(14, 'foi_livres_h3', '', '"Accéder aux contenus textes religieux chrétiens"', '', '', '', '', '', ''),
(16, 'foi_images_h2', '', '"L''Homme est à l''image de Dieu et l''art de l''humanité entrouvre les portes du Paradis"', '', '', '', '', '', ''),
(17, 'foi_images_h_img', '', '{"src":"imgs/foi/images/croire-religiosite-chretienne.png","alt":"au commencement était la lumière, la vision de Dieu","title":"le monde des cieux en images, photos, peintures, animations..."}', '', '', '', '', '', ''),
(18, 'foi_images_video', '', '{"src":"/files/foi/images/vision-paradis.mp4","title":"Voir Dieu père fils et esprit, à travers l''art et la foi en Dieu de l''homme"}', '', '', '', '', '', ''),
(19, 'foi_images_h3', '', '"Accéder à l''iconographie religieuse chrétienne"', '', '', '', '', '', ''),
(20, 'foi_images_button_0', '', '{"title":"Images chrétiennes de jésus, Dieu, les anges, la vierge marie...","href":"#!images-chretiennes-dieu-jesus=images-religieuses-chretiennes","html":"Icônographie chrétienne"}', '', '', '', '', '', ''),
(21, 'foi_musics_h2', '', '"Musiques, artiste, chants, méditations enseignements... écouter chrétien"', '', '', '', '', '', ''),
(22, 'foi_musics_h_img', '', '{"src":"imgs/foi/musics/danser-avec-jesus.png","alt":"la pssion en jésus nous fait danser","title":"les musiques d''adoration du christ"}', '', '', '', '', '', ''),
(23, 'foi_musics_video', '', '{"src":"files/foi/musics/entendre-voix-jesus.mp4","title":"Jésus nous appelle à parler avec lui et à prier Dieu notre père avec lui"}', '', '', '', '', '', ''),
(24, 'foi_musics_h3', '', '"Accéder aux artistes, musiques, chants et prières chrétiennes"', '', '', '', '', '', ''),
(26, 'foi_films_h2', '', '"Revivre les oeuvres de Jésus"', '', '', '', '', '', ''),
(27, 'foi_films_h_img', '', '{"src":"imgs/foi/films/vie-de-jesus.png","alt":"Les oeuvres de jésus en vidéo","title":"Marquer votre esprit par des vidéos éloquentes"}', '', '', '', '', '', ''),
(28, 'foi_films_video', '', '{"src":"files/foi/films/cinema-foi-jesus.mp4"}', '', '', '', '', '', ''),
(29, 'foi_films_h3', '', '"Accéder au contenu multimédia vidéo de jesus-christ.tv"', '', '', '', '', '', ''),
(30, 'foi_films_buttons', '', '["Films et courts-métrage chrétiens","Orateurs et thèmes chrétiens"]', '', '', '', '', '', ''),
(31, 'foi_cp_badges_0', '', '0', '', '', '', '', '', ''),
(32, 'foi_cp_badges_1', '', '0', '', '', '', '', '', ''),
(33, 'foi_prieres_buttons', '', '[" Créer une communauté de prière"," Rejoindre une communauté de prière"]', '', '', '', '', '', ''),
(34, 'foi_prieres_img', '', '{"src":"bottom.jpg","alt":"kjhuhj","title":"je suis un tile dune image"}', '', '', '', '', '', ''),
(36, 'foi_rencontres_h2', '', '"titre du menu rencontres"', '', '', '', '', '', ''),
(37, 'foi_rencontres_lien', '', '{"href":"https://www.exemple.fr/","title":"title ultra seo","html":" lien seo rencontre"}', '', '', '', '', '', ''),
(38, 'foi_rencontres_buttons', '', '[" Créer une activité de rencontre"," Se joindre à une activité"]', '', '', '', '', '', ''),
(40, 'foi_rencontres_img', '', '{"src":"bottom.jpg","alt":"kjhuhj","title":"je suis un title dune image"}', '', '', '', '', '', ''),
(42, 'accueil_form_2', '', '{"action":"reseau-social-chretien","titre":"Informations","input_0":"Votre email","input_1":"Votre mot de passe","liens_html":"Se connecter en Jésus avec<br>","liens_title":"Entrer en connexion avec le vrai Dieu chrétien"}', '', '', '', '', '', ''),
(43, 'accueil_signedin', '', '"Vous venez de vous enregistrer sur jesus-christ.tv, veuillez vous logger."', '', '', '', '', '', ''),
(44, 'foi_menu_droit', '', '{"fieldset":"Faite une prière sur le blog de la foi","button0":" Déposez une image","button1":" Déposez un audio","button2":" Déposez une vidéo"}', '', '', '', '', '', ''),
(45, 'foi_livres_button_2', '', '{"title":"La parole de Dieu commenté et argumentés par des hommes non-laïcs","href":"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=homelies-evangiles","html":"La Parole"}', '', '', '', '', '', ''),
(47, 'foi_livres_button_0', '', '{"title":"Livres, enseignements, histoire religion, le meilleur de la lecture chrétienne au quotidien","href":"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=livres-chretiens","html":"Livres chrétiens"}', '', '', '', '', '', ''),
(48, 'foi_livres_button_1', '', '{"title":"Prières chrétiennes pour sauver son âme et celles des autres","href":"/jesus-christ-foi-chretienne#!livres-prieres-homelies-foi-jesus-christ-evangiles-credo-eglises=prieres-chretiennes","html":"Prières chrétiennes"}', '', '', '', '', '', ''),
(49, 'foi_livres__hs_', '', '{"h2":"Les prières et cantiques religieux chrétiens","h3":"Propositions du réseau-social jésus-christ.tv","h3_":"Propositions des internautes"}', '', '', '', '', '', ''),
(51, 'foi_livres__hs', '', '{"h2":"Les livres, éditeurs, auteurs et documents religieux chrétiens","h3":"Propositions du réseau-social jésus-christ.tv","h3_":"Propositions des membres internautes"}', '', '', '', '', '', ''),
(53, 'foi_livres__s', '', '{"void":"filtrer les livres","_0":"Sur Jésus","_1":"Sur Dieu","_2":"Sur Marie","_3":"Sur les anges","autre":"Autre"}', '', '', '', '', '', ''),
(54, 'foi_livres__s_', '', '{"void":"Filtrer les prières","_0":"Livret de prière","_1":"Prières d''adoration","autre":"Autre"}', '', '', '', '', '', ''),
(55, 'foi_livres__themes', '', '{"_0":"livres","_1":"prieres"}', '', '', '', '', '', ''),
(60, 'foi_images__hs', '', '{"h2":"Les images, icônes, peintures, animations informatique et l''art moderne chrétien","h3":"Galerie du réseau-social jésus-christ.tv","h3_":"Galerie des membres internautes"}', '', '', '', '', '', ''),
(61, 'foi_images__s', '', '{"void":"filtrer les images","_0":"Image religieuse","_1":"Icône religieuse","_2":"Peinture chrétienne","_3":"GIF animé","etc":"Etc..."}', '', '', '', '', '', ''),
(62, 'foi_images__themes', '', '{"_0":"images"}', '', '', '', '', '', ''),
(64, 'foi_musics__themes', '', '{"_0":"musics","_1":"chants"}', '', '', '', '', '', ''),
(65, 'foi_musics__s', '', '{"void":"Filtrer par styles musical","_0":"Reggae","_1":"Gospel","_2":"Rap","etc":"Etc..."}', '', '', '', '', '', ''),
(66, 'foi_musics__sbis', '', '{"_void":"Filtrer par zone géographique","__0":"Afrique Ouest","__1":"Occident","__2":"Asie Orientale","__3":"Magrheb","_etc":"Etc..."}', '', '', '', '', '', ''),
(67, 'foi_musics__i', '', '"Recherche par artiste ou titre musique"', '', '', '', '', '', ''),
(68, 'foi_musics__i_', '', '"Recherche par titre chant ou méditation"', '', '', '', '', '', ''),
(69, 'foi_musics__hs', '', '{"h2":"Les artistes chanteurs religieux chrétiens","h3":"Propositions de musiques par jésus-christ.net","h3_":"Propositions d''artistes des internautes"}', '', '', '', '', '', ''),
(70, 'foi_musics__hs_', '', '{"h2":"Les méditations et chants chrétiens","h3":"Propositions d''audios par jésus-christ.net","h3_":"Propositions de fichiers audio par les internautes"}', '', '', '', '', '', ''),
(71, 'foi_musics_button_0', '', '{"title":"Les chanteurs louants le Seigneur par leurs grâces musicales","href":"#!musiques-chretiennes-chants-adoration=musiques-chretiennes","html":"Musiques chrétiennes"}', '', '', '', '', '', ''),
(72, 'foi_musics_button_1', '', '{"title":"chants et méditations nous inspirant sur le Dieu chrétien","href":"#!musiques-chretiennes-chants-adoration=chants-chretiens","html":"Chants chrétiens"}', '', '', '', '', '', ''),
(73, 'foi_films__themes', '', '{"_0":"films","_1":"enseignements"}', '', '', '', '', '', ''),
(74, 'foi_films__s', '', '{"void":"Filtrer par thème","_0":"Jésus","_1":"Vierge Marie","_2":"Dieu","_3":"Les Anges","_4":"L''ante-christ","etc":"Etc..."}', '', '', '', '', '', ''),
(75, 'foi_films__hs', '', '{"h2":"Le cinéma religieu chrétien","h3":"Propositions de films par jésus-christ.net","h3_":"Propositions de films par les membres de jesus-christ.tv"}', '', '', '', '', '', ''),
(76, 'foi_films__hs_', '', '{"h2":"Les enseignements religieux chrétiens","h3":"Propositions de jésus-christ.net","h3_":"Propositions des internautes"}', '', '', '', '', '', ''),
(77, 'foi_films_button_0', '', '{"title":"Les films, séries et courts-métrages évoquants de près ou de loin la trinité de Dieu","href":"#!films-jesus-christ-notre-seigneur=films-series-courts-metrages-chretiens","html":"Films chrétiens"}', '', '', '', '', '', ''),
(78, 'foi_films_button_1', '', '{"title":"Les enseignements et orateurs-prédicateurs religieux à thèmes chrétiens-Jésus, Marie ou Dieu","href":"#!films-jesus-christ-notre-seigneur=enseignements-predicateurs-chretiens","html":"Enseignements chrétiens"}', '', '', '', '', '', ''),
(79, 'foi_rc_badges_0', '', '0', '', '', '', '', '', ''),
(80, 'foi_rc_badges_1', '', '0', '', '', '', '', '', ''),
(81, 'charite_accueil_h2', '', '"La charité de la Vierge Marie, mère de Dieu, continue d''agir dans le monde."', '', '', '', '', '', ''),
(82, 'charite_accueil_h3s', '', '["Ange Gabriel : l''annonciation à Marie de Nazareth","Le coeur immaculé de Marie, Mère de Jésus","Le Magnificat : visitation à Elisabeth"]', '', '', '', '', '', ''),
(83, 'charite_accueil_img', '', '{"src":"imgs/charite/vierge-marie-coeur-immacule.jpg","alt":"La prière et le coeur immaculé","title":"prier pour sanctifier votre âme et accueillir le Christ"}', '', '', '', '', '', ''),
(84, 'charite_accueil_video', '', '{"src":"/files/charite/annonciation-a-marie.mp4","title":"L''absolution de la foi et confiance de Marie la Madone, en Dieu le Très-Haut"}', '', '', '', '', '', ''),
(85, 'charite_accueil_audio', '', '{"src":"/files/charite/le-magnificat-elisabeth.mp3","title":"Le fille de judée, notre Dame de toute Grâce, chante à sa cousine élisabeth la venue de Jean le baptiste"}', '', '', '', '', '', ''),
(87, 'charite_accueil_lien1', '', '{"href":"http://ekladata.com/wA20-hGhAhoUYMX4oLdab7lxbCg.jpg","title":"Les anges ont conduits la très Sainte Vierge Marie au ciel","html":" L''assomption de la Vierge Marie"}', '', '', '', '', '', ''),
(88, 'charite_accueil_lien2', '', '{"href":"https://www.choralepolefontainebleau.org//content//uploads//2016//08//Cantique-de-Marie---M.mp3","title":"Visitation, action de grâce - méditation, marie, baptême","html":" Cantique : ''Magnificat''"}', '', '', '', '', '', ''),
(89, 'charite_accueil_lien3', '', '{"href":"https://youtube.com/watch?v=Wp_KbnlqBhc","title":"Reine du ciel","html":" Mariophanie : apparitions mariales"}', '', '', '', '', '', ''),
(90, 'charite_menu_droit', '', '{"html":"Rédiger un article","title":"Décrivez une oeuvre de charité, une action de solidarité, une action sociale, un acte bénévole ou un don que vous avez réalisé récement !"}', '', '', '', '', '', ''),
(91, 'charite_oc_badges_0', '', '0', '', '', '', '', '', ''),
(92, 'charite_oc_badges_1', '', '0', '', '', '', '', '', ''),
(93, 'charite_s_badges_0', '', '0', '', '', '', '', '', ''),
(94, 'charite_s_badges_1', '', '0', '', '', '', '', '', ''),
(95, 'charite_as_badges_0', '', '0', '', '', '', '', '', ''),
(96, 'charite_as_badges_1', '', '0', '', '', '', '', '', ''),
(97, 'charite_b_badges_1', '', '0', '', '', '', '', '', ''),
(98, 'charite_b_badges_0', '', '0', '', '', '', '', '', ''),
(99, 'charite_accueil_lien0', '', '{"href":"https://fr.wikipedia.org/wiki/Marie_(m%C3%A8re_de_J%C3%A9sus","title":"Immaculée conception","html":" Marie - Mère de Jésus"}', '', '', '', '', '', ''),
(100, 'esperance_accueil_lien0', '', '{"href":"www.topchretien.com/topmessages/texte/apprendre-a-esperer-en-dieu","title":"confiance d''une attent pour un avenir meilleur","html":" Espère en l''Eternel"}', '', '', '', '', '', ''),
(101, 'esperance_menu_droit', '', '{"p":"jesus-christ.tv souhaite changer le monde grâce à la participation de tous les chrétiens. Ici vous pouvez poster que le blog de l''espoir des informations susceptibles d''aider l''humanité","_1":"Lien d''un d''article","_2":"Lien d''une vidéo internet"}', '', '', '', '', '', ''),
(102, 'esperance_accueil_lien3', '', '{"href":"dailymotion.com/video/x37rr34","title":"Qu''est ce que la miséricorde de Dieu","html":" La miséricorde divine"}', '', '', '', '', '', ''),
(103, 'esperance_accueil_lien2', '', '{"href":"https://messages.topc.fr/MP3PE000111.mp3","title":"Notre Dieu est toujours le Dieu de l''espérance","html":" En Dieu, il y a toujours espoir"}', '', '', '', '', '', ''),
(104, 'esperance_accueil_lien1', '', '{"href":"ekldata.com/vYBoGRpA-dH-C1yaRwwt3oBt7os@300x195.jpg","title":"La bible offre un message d''espoir à tous les parents quisouffrent à propos d''un enfant difficil","html":" Un message d''espoir pour tous les parents"}', '', '', '', '', '', ''),
(105, 'esperance_accueil_audio', '', '{"src":"/files/esperance/_____.mp3","title":"_____________"}', '', '', '', '', '', ''),
(106, 'esperance_accueil_video', '', '{"src":"/files/esperance/faire-confiance-a-dieu.mp4","title":"En confiant nos attentes et nos espoir en Dieu le Père, nous lui faisons preuve d''amour"}', '', '', '', '', '', ''),
(107, 'esperance_accueil_img', '', '{"src":"imgs/esperance/lumiere-d-esperance.png","alt":"esperer la vie eternel que promet Dieu le fils","title":"Royaume des cieux, Paradis et puissances divine"}', '', '', '', '', '', ''),
(108, 'esperance_accueil_h3s', '', '["Ce qui plaît le plus à Dieu est le sacrifice","La lumière de Dieu est d''un espoir éblouissant","Le livre de la Genèse"]', '', '', '', '', '', ''),
(109, 'esperance_accueil_h2', '', '"Gardez espoir en Dieu, espérez la vie éternelle qu''il nous promet, remettez en Lui votre avenir, vos vœux, rêves et attentes."', '', '', '', '', '', ''),
(110, 'foi_musics__s_', '', '{"void":"Filtrer par styles musical","_0":"D''intersescion","_1":"D''adoration","_2":"De louange","autre":"Autre"}', '', '', '', '', '', ''),
(111, 'foi_menu_h1', '', '"La foi chrétienne mondial au service du fils de l''homme notre Seigneur Jésus de Nazareth"', '', '', '', '', '', ''),
(112, 'charite_menu_h1', '', '"La charité chrétienne à l''oeuvre par l’intercession du coeur immaculé de Marie"', '', '', '', '', '', ''),
(113, 'esperance_menu_h1', '', '"Dieu le Père, le très-haut, amour et créateur, gardien du paradis et de l''espoir de l''humanité"', '', '', '', '', '', ''),
(114, 'foi_rc_ul_titles', '', '["Nombre d''inscrits validés","Nombre de participants possible","Vous recevrez une notification de validation ou rejet de votre demande de participation"]', '', '', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
