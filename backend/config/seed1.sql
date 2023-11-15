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

 Date: 20/10/2023 01:07:13
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
  "drinkCost" varchar
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
    ('Casual', 'Jenga', '1', 'The Ginn Mill', '2041 Larimer St, Denver, CO 80205', '7-10', '12-15', '3', NULL, '4a6a01a3-4c10-479f-96df-7694d9a3f8c3');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Arcade', '3', 'The 1UP Arcade Bar - LoDo', '1925 Blake St, Denver, CO 80202', '3-5', '5-8', '1', 'no', '2ac77646-a656-4b87-afae-ec48dd4a16de');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Cornhole', '1', 'Tarantula Billiard & Bar', '1520 Stout St, Denver, CO 80202', NULL, '8-11', '4', NULL, '17253a62-14b3-4c18-b745-abb8f6cb6a00');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Cornhole', '1', 'Cheba Hut "Toasted" Subs', '4245 W Colfax Ave, Denver, CO 80204', '5-7', '5-8', '5', NULL, 'bd82966c-6a81-4c31-bbaa-4d8387dc13df');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Cornhole', '1', 'Edgewater Beer Garden', '2508 Gray St, Edgewater, CO 80214', '5-7', '5-8', '5', NULL, 'b8cb138d-caf5-4381-8541-80dad63d2ab2');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '1', 'Rupert"s at the Edge', '2045 Sheridan Boulevard, Edgewater, CO 80214', '5-7', '5-8', '5', NULL, '1e1afb13-251c-4d6f-852e-e32d4f1319be');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Jenga', '3', 'Rio Grande Mexican Restaurant', '1745 Wazee St, Denver, CO 80202', '7-10', '12-15', '2', 'yes', 'c32338f4-20a0-4e3d-aaca-3cc248bc23b9');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Arcade', '2', 'Edgewater Public Market', '5505 W 20th Ave, Edgewater, CO 80214', '5-7', '0-5', '4', NULL, 'd66b6055-2ff0-4fbc-b716-4c3a20a4e23e');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Pingpong', '2', 'Lakeview Lounge', '2375 Sheridan Boulevard, Edgewater, CO 80214', '5-7', '0-5', '4', NULL, '10ad58c9-c379-43fd-bccd-9e1610b73446');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Pingpong', '2', 'Odell Brewing Sloan"s Lake Brewhouse & Pizzeria', '1625 Perry St, Denver, CO 80204', '5-7', '5-8', '4', NULL, '8687fa65-e2f8-4d40-b0fc-9e5088ec66d8');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Cornhole', '1', 'Tap & Burger Sloan"s Lake', '1565 N Raleigh St #100, Denver, CO 80204', '5-7', '5-8', '4', NULL, '38af2e2e-4b71-49e0-b480-4b264710a9d6');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Arcade', '5', 'B&GC', '249 Columbine St, Denver, CO 80206', '3-5', '19+', '2', NULL, '37a39cc1-25fc-48ee-a4d4-d67293c82fe5');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Beer Pong', '4', 'Meadowlark Bar', '2701 Larimer St, Denver, CO 80205', '7-10', '15-18', '1', NULL, 'db26f897-b93e-4738-9215-900ed3482770');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Shuffle Board', '4', 'Federales Denver', '2901 Larimer St, Denver, CO 80205', '7-10', '15-18', '1', NULL, '3406d1cc-8343-458f-bbb3-216c0979f5f4');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Shuffle Board', '4', 'Barcelona Wine Bar', '2900 Larimer St, Denver, CO 80205', '7-10', '15-18', '1', NULL, 'c58ed651-90d0-4c43-9524-ed68ea460eb3');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '2', 'Bao Brewhouse', '1317 14th St, Denver, CO 80202', '10+', '5-8', '2', NULL, '58967c73-3494-4bd2-9959-a637d9efad18');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '2', 'Rhein Haus Denver', '1415 Market St, Denver, CO 80202', '10+', '5-8', '2', NULL, 'f751ea6e-5e6b-4ec6-b9ff-8f1061a1fa2e');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '1', 'The Front Porch', '1215 15th St, Denver, CO 80202', '10+', '5-8', '2', NULL, '2577f56c-7771-48ce-9f03-c2b761247882');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '1', 'Red Square Euro Bistro', '1512 Larimer St #38r, Denver, CO 80202', NULL, '8-11', '2', NULL, '40e20de1-8786-48f0-82f9-472fe68812f8');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '1', 'STK Steakhouse', '1550 Market St, Denver, CO 80202', NULL, '8-11', '2', NULL, '1c4264dd-180d-4760-aa0a-7226f26f2fb2');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Pingpong', '1', 'Hapa Sushi Grill and Sake Bar', '1514 Blake St, Denver, CO 80202', NULL, '8-11', '2', NULL, '72dd9391-2568-4908-812c-4da0791c851e');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Pingpong', '2', 'Blue Sushi Sake Grill', '1616 16th St Mall, Denver, CO 80202', NULL, '8-11', '2', NULL, '06e6f1de-abfc-411d-b408-b2fcc4595be2');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Jenga', '3', 'ViewHouse Ballpar', '2015 Market St, Denver, CO 80205', '7-10', '12-15', '3', NULL, 'c2bd662a-cca0-4814-be84-97020ad86589');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Jenga', '3', 'Dierks Bentley"s Whiskey Row Denver', '1946 Market St, Denver, CO 80202', '7-10', '12-15', '3', NULL, 'd40551d1-eacf-43f0-9439-1a7e5e91f036');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Jenga', '3', 'Mile High Spirits', '2201 Lawrence St, Denver, CO 80205', '7-10', '12-15', '3', NULL, '1387cc58-2740-48be-83ff-93cdb70cd436');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', NULL, '1', 'Recess Beer Garden', '2715 17th St #103, Denver, CO 80211', NULL, '0-5', NULL, NULL, '0b197df1-2bbc-438c-a223-e790feb13b81');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', NULL, '1', 'Señor Bear', '3301 Tejon St, Denver, CO 80211', NULL, '0-5', NULL, NULL, 'dcd1b89d-5d40-4e9c-a2f5-55d20800a8a5');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Boardgames', '1', 'Bamboo Sushi', '2715 17th St, Denver, CO 80211', NULL, '0-5', NULL, NULL, 'e43b3d80-f2f0-4980-b77c-0332a42c7ef7');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Boardgames', '1', 'Lady Jane', '2021 W 32nd Ave, Denver, CO 80211', NULL, '0-5', NULL, NULL, 'fd49156e-af80-4eeb-9d0b-fb6f1b145caa');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Boardgames', '1', 'Postino LoHi', '2715 17th St, Denver, CO 80211', NULL, '0-5', NULL, NULL, 'da56ccb1-8859-4d3f-a48f-f982815162fa');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Volleyball', '1', 'Happy Camper Pizza', '3211 N Pecos St, Denver, CO 80211', NULL, '0-5', NULL, NULL, '3562a5bd-2d04-4e01-a691-dbfe109972f2');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Jenga', '3', 'The Lobby', '2191 Arapahoe St, Denver, CO 80205', '7-10', '12-15', '3', NULL, '276087cb-1673-425a-8ea9-54c47605f120');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Beer Pong', '3', 'Ian"s Pizza Denver | Blake Street', '2210 Blake St #101b, Denver, CO 80205', '7-10', '12-15', '3', NULL, '42270684-4def-42d7-bd02-c8d370448136');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Darts', '3', 'Lustre Pearl Denver', '1315 26th St, Denver, CO 80205', '7-10', '15-18', '2', NULL, '4502bd00-4527-4830-9a88-3fd823664b50');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Darts', '4', 'Matchbox', '2625 Larimer St, Denver, CO 80205', '7-10', '15-18', '2', NULL, '6070a5e0-8837-43c3-b2aa-695cb954875f');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Darts', NULL, 'BurnDown', '476 S Broadway, Denver, CO 80209', '3-5', NULL, '1', NULL, '88069e48-91a9-4762-9b69-b5e51d066b82');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Darts', NULL, 'Historians Ale House', '24 Broadway #102, Denver, CO 80203', '3-5', NULL, '1', NULL, '12511c1f-c761-4838-9566-4d739e37c8d0');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Darts', NULL, 'Milk Bar', '1037 Broadway, Denver, CO 80203', '3-5', NULL, '1', NULL, '6d3ad7f4-08e6-4888-9793-359fb5c79999');
  INSERT INTO "public"."locations"
  VALUES
    (NULL, 'Darts', NULL, 'Stoney"s Bar & Grill', '1111 Lincoln St, Denver, CO 80203', '3-5', NULL, '1', NULL, '2bbb53f1-e6e3-4b1a-abfc-5b083caf1d28');
  INSERT INTO "public"."locations"
  VALUES
    (NULL, 'Darts', NULL, 'Club Vinyl', '1082 Broadway, Denver, CO 80203', '3-5', NULL, '1', NULL, 'a61706ea-fa1b-489a-8a80-6fc5ddb76ff0');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Beer Pong', '4', 'Los Chingones', '2463 Larimer St, Denver, CO 80205', '7-10', '12-15', '2', NULL, 'ba50cb5e-9609-46f2-b182-9a893e68d996');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Beer Pong', '4', 'Death & Co Denver', '1280 25th St, Denver, CO 80205', '7-10', '15-18', '1', NULL, '71d367ae-39b0-4209-8e10-8344a235e0c6');
  INSERT INTO "public"."locations"
  VALUES
    ('Formal', 'Beer Pong', '3', 'Uchi', '2500 Lawrence St #200, Denver, CO 80205', '7-10', '15-18', '1', NULL, '602e21f5-80c6-4fb8-a547-a1df464ec467');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Beer Pong', '3', 'SuperMegaBien', '1260 25th St, Denver, CO 80205', '7-10', '15-18', '1', NULL, '340822a5-75e0-4b2d-81cd-8339790a648a');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Beer Pong', '4', 'American Bonded', '2706 Larimer St, Denver, CO 80205', '7-10', '15-18', '1', NULL, '002931f9-bc4e-46e9-a371-0985d3026224');
  INSERT INTO "public"."locations"
  VALUES
    (NULL, 'Darts', NULL, 'The Church Nightclub', '1160 Lincoln St, Denver, CO 80203', '3-5', NULL, '1', NULL, '9d1b39f0-8e2b-4a23-bc96-59f31ff960e2');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Shuffle Board', '4', 'Bierstadt Lagerhaus', '2875 Blake St, Denver, CO 80205', '7-10', '15-18', '2', NULL, '5181188a-95f1-43e8-b5f0-56b54a3f8555');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Pingpong', '2', 'The Pig & The Sprout', '1900 Chestnut Pl, Denver, CO 80202', '10+', '8-11', '3', NULL, '7d0efb00-3765-4be4-bc86-d1810bd9be5b');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Pingpong', '2', 'Tom"s Watch Bar - Coors Field', '1601 19th St Unit 100, Denver, CO 80202', '10+', '8-11', '3', NULL, '44eb61a0-472b-4eac-9984-24459ab07053');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Volleyball', '1', 'Prost Brewing Company', '2540 19th St, Denver, CO 80211', NULL, '0-5', NULL, NULL, 'f47add2e-eacf-4285-865f-6c1c79441bdb');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Jenga', '3', 'Jackson"s LODO', '1520 20th St, Denver, CO 80202', '10+', '12-15', '3', NULL, '7c5675c9-3021-464f-abdb-2cbdd5519053');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Jenga', '3', 'The Refinery', '1932 Blake St, Denver, CO 80202', '10+', '12-15', '3', NULL, '8c0e5284-b9ec-4216-b724-4e7a4892b119');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Arcade', '2', 'Forest Room 5', '2532 15th St, Denver, CO 80211', '10+', '0-5', '5', NULL, '6ecc1d52-4bc7-4f71-965d-286ef4cfe1ed');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Cornhole', '1', 'Tarantula Billiard & Bar', '1520 Stout St, Denver, CO 80202', NULL, '8-11', '4', NULL, '17253a62-14b3-4c18-b745-abb8f6cb6a00');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '2', 'Little Machine Bee', '2924 W 20th Ave, Denver, CO 80211', '10+', '5-8', '4', NULL, '6f62e7c7-03fd-430b-9133-b9113a39931c');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Pingpong', '2', 'My Brother"s Bar', '2376 15th St, Denver, CO 80202', '10+', '8-11', '4', NULL, '49e9ebc7-c94c-480e-972e-4ab6c47b76aa');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Pingpong', '2', 'The Cooper Lounge', '1701 Wynkoop St, Denver, CO 80202', '10+', '8-11', '4', NULL, '806402bd-8ce6-4007-a044-dc1c94459f1b');
  INSERT INTO "public"."locations"
  VALUES
    ('Intimate', 'Volleyball', '1', 'Avanti Food & Beverage', '3200 N Pecos St, Denver, CO 80211', '10+', '0-5', '5', NULL, '76770f63-1cce-491e-a63c-d87142f7b9fe');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Arcade', '2', 'Joyride Brewing Company', '2501 Sheridan Boulevard, Edgewater, CO 80214', '10+', '5-8', '5', NULL, 'ad3a10c4-701d-47b2-a940-3e93f629bc3c');
  INSERT INTO "public"."locations"
  VALUES
    ('Party', 'Cornhole', '2', 'Stout Street Social', '1400 Stout St, Denver, CO 80202', NULL, '8-11', '4', NULL, 'ebdfa918-230a-4186-8f6e-a737a40c5748');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Shuffle Board', '4', 'RiNo Beer Garden', '3800 Walnut St, Denver, CO 80205', '5-7', '19+', '2', NULL, 'c292a798-4f2d-4444-b3a0-ab8ecd48586d');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Shuffle Board', '4', 'The 1UP Arcade Bar - Colfax', '717 E Colfax Ave, Denver, CO 80203', '5-7', '19+', '2', NULL, 'b901a9bc-eead-49e3-9946-9b412f45e510');
  INSERT INTO "public"."locations"
  VALUES
    ('Casual', 'Jenga', '3', 'Tap Fourteen - Rooftop Beer Garden', '1920 Blake St, Denver, CO 80202', '7-10', '12-15', '3', NULL, 'cb145c69-116e-4c7b-a197-773cd0d4bba7');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Pool', '5', 'Your Mom"s House Denver', '608 E 13th Ave, Denver, CO 80203', '5-7', '19+', '1', NULL, '0e8f1a94-731b-4dbe-b022-0e97c02c82ec');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Pool', '5', 'Punch Bowl Social Denver', '65 Broadway, Denver, CO 80203', '3-5', '19+', '1', NULL, '89e1873b-cab0-40af-9703-e5c87085b869');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Darts', '5', 'Canopy', '8 N Broadway, Denver, CO 80203', '3-5', NULL, '1', NULL, '0020ac87-d8cb-47da-ac51-bda405d6a90f');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Shuffle Board', '4', 'Number Thirty Eight', '3560 Chestnut Pl, Denver, CO 80216', '5-7', '15-18', '2', NULL, 'db279117-8dfc-4d98-a000-55f2c3d4845f');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Shuffle Board', '4', 'Blue Moon Brewing Company', '3750 Chestnut Pl, Denver, CO 80216', '5-7', '19+', '2', NULL, 'b5c7b386-a849-49cc-908b-089d4d19bb1a');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Shuffle Board', '4', 'Mister Oso', '3163 Larimer St, Denver, CO 80205', '10+', '15-18', '2', NULL, '0eded76e-9c75-4131-8437-b28c79af3245');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Cornhole', '4', 'Improper City', '3201 Walnut St, Denver, CO 80205', '10+', '15-18', '2', NULL, 'ed73e40d-6120-459f-a0f4-4a3a82141a1e');
  INSERT INTO "public"."locations"
  VALUES
    ('Cozy', 'Cornhole', '4', 'Zeppelin Station', '3501 Wazee St #100, Denver, CO 80216', '10+', '15-18', '2', NULL, 'b15d7b78-0015-4c3b-a44e-98d4ffba3926');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Pool', '5', 'Jelly Cafe', '600 East 13th Avenue, Pearl St, Denver, CO 80203', '10+', '19+', '2', NULL, '4bfc47aa-f598-45ed-8ffe-ded8b82535ff');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Arcade', '5', 'Culinary Dropout', '4141 E 9th Ave, Denver, CO 80220', '10+', '19+', '2', NULL, '72539d4a-6950-4611-b7b8-27a4e72c91c5');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Arcade', '5', 'The Cherry Cricket', '2641 E 2nd Ave, Denver, CO 80206', '10+', '19+', '2', NULL, 'e8ba66be-fed8-46ad-a27b-50a788764295');
  INSERT INTO "public"."locations"
  VALUES
    ('Views', 'Arcade', '5', 'Hillstone', '303 Josephine St, Denver, CO 80206', '5-7', '19+', '2', NULL, '01d8f4b7-3436-4488-bcfa-f8104be0f752');
