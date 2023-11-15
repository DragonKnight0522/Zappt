/*
 Navicat Premium Data Transfer

 Source Server         : zappt
 Source Server Type    : PostgreSQL
 Source Server Version : 130009 (130009)
 Source Host           : mahmud.db.elephantsql.com:5432
 Source Catalog        : fallkksu
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130009 (130009)
 File Encoding         : 65001

 Date: 20/10/2023 07:16:52
*/


-- ----------------------------
-- Table structure for locations
-- ----------------------------
DROP TABLE IF EXISTS "public"."locations";
CREATE TABLE "public"."locations"
(
  "ambiance" varchar(255) COLLATE "pg_catalog"
  ."default",
  "games" varchar
  (255) COLLATE "pg_catalog"."default",
  "mixology" varchar
  (255) COLLATE "pg_catalog"."default",
  "name" varchar
  (255) COLLATE "pg_catalog"."default",
  "address" varchar
  (255) COLLATE "pg_catalog"."default",
  "beerCost" varchar
  (255) COLLATE "pg_catalog"."default",
  "drinkcost" varchar
  (255) COLLATE "pg_catalog"."default",
  "sports" varchar
  (255) COLLATE "pg_catalog"."default",
  "offersFood" varchar
  (255) COLLATE "pg_catalog"."default",
  "id" varchar
  (255) COLLATE "pg_catalog"."default"
)
;

  -- ----------------------------
  -- Records of locations
  -- ----------------------------
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Recess Beer Garden', '2715 17th St #103, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Señor Bear', '3301 Tejon St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Bamboo Sushi', '2715 17th St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Lady Jane', '2021 W 32nd Ave, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Postino LoHi', '2715 17th St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Happy Camper Pizza', '3211 N Pecos St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Prost Brewing Company', '2540 19th St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Avanti Food & Beverage', '3200 N Pecos St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Forest Room 5', '2532 15th St, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Edgewater Public Market', '5505 W 20th Ave, Edgewater, CO 80214', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Lakeview Lounge', '2375 Sheridan Boulevard, Edgewater, CO 80214', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Odell Brewing Sloan"s Lake Brewhouse & Pizzeria', '1625 Perry St, Denver, CO 80204', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Tap & Burger Sloan"s Lake', '1565 N Raleigh St #100, Denver, CO 80204', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Cheba Hut "Toasted" Subs', '4245 W Colfax Ave, Denver, CO 80204', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Edgewater Beer Garden', '2508 Gray St, Edgewater, CO 80214', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Rupert"s at the Edge', '2045 Sheridan Boulevard, Edgewater, CO 80214', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Joyride Brewing Company', '2501 Sheridan Boulevard, Edgewater, CO 80214', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Little Machine Bee', '2924 W 20th Ave, Denver, CO 80211', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Bao Brewhouse', '1317 14th St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Rhein Haus Denver', '1415 Market St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Front Porch', '1215 15th St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Red Square Euro Bistro', '1512 Larimer St #38r, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'STK Steakhouse', '1550 Market St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Hapa Sushi Grill and Sake Bar', '1514 Blake St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Blue Sushi Sake Grill', '1616 16th St Mall, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Tarantula Billiard & Bar', '1520 Stout St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Stout Street Social', '1400 Stout St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Tarantula Billiard & Bar', '1520 Stout St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'My Brother"s Bar', '2376 15th St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Cooper Lounge', '1701 Wynkoop St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Pig & The Sprout', '1900 Chestnut Pl, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Tom"s Watch Bar - Coors Field', '1601 19th St Unit 100, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Jackson"s LODO', '1520 20th St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Refinery', '1932 Blake St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Tap Fourteen - Rooftop Beer Garden', '1920 Blake St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The 1UP Arcade Bar - LoDo', '1925 Blake St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Rio Grande Mexican Restaurant', '1745 Wazee St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Ginn Mill', '2041 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'ViewHouse Ballpar', '2015 Market St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Dierks Bentley"s Whiskey Row Denver', '1946 Market St, Denver, CO 80202', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Mile High Spirits', '2201 Lawrence St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Lobby', '2191 Arapahoe St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Ian"s Pizza Denver | Blake Street', '2210 Blake St #101b, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Los Chingones', '2463 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Death & Co Denver', '1280 25th St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Uchi', '2500 Lawrence St #200, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'SuperMegaBien', '1260 25th St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Lustre Pearl Denver', '1315 26th St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Matchbox', '2625 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'American Bonded', '2706 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Meadowlark Bar', '2701 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Federales Denver', '2901 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Barcelona Wine Bar', '2900 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Bierstadt Lagerhaus', '2875 Blake St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Mister Oso', '3163 Larimer St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Improper City', '3201 Walnut St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Zeppelin Station', '3501 Wazee St #100, Denver, CO 80216', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Number Thirty Eight', '3560 Chestnut Pl, Denver, CO 80216', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Blue Moon Brewing Company', '3750 Chestnut Pl, Denver, CO 80216', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'RiNo Beer Garden', '3800 Walnut St, Denver, CO 80205', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The 1UP Arcade Bar - Colfax', '717 E Colfax Ave, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Your Mom"s House Denver', '608 E 13th Ave, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Jelly Cafe', '600 East 13th Avenue, Pearl St, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Culinary Dropout', '4141 E 9th Ave, Denver, CO 80220', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Cherry Cricket', '2641 E 2nd Ave, Denver, CO 80206', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Hillstone', '303 Josephine St, Denver, CO 80206', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'B&GC', '249 Columbine St, Denver, CO 80206', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Punch Bowl Social Denver', '65 Broadway, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Canopy', '8 N Broadway, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'BurnDown', '476 S Broadway, Denver, CO 80209', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Historians Ale House', '24 Broadway #102, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Milk Bar', '1037 Broadway, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Stoney"s Bar & Grill', '1111 Lincoln St, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'Club Vinyl', '1082 Broadway, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
  INSERT INTO "public"."locations"
  VALUES
    (NULL, NULL, NULL, 'The Church Nightclub', '1160 Lincoln St, Denver, CO 80203', NULL, NULL, NULL, NULL, NULL);
