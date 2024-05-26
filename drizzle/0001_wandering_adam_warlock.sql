CREATE TABLE IF NOT EXISTS `society_users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`society_id` int NOT NULL,
	`user_id` int NOT NULL,
	CONSTRAINT `society_users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `society_users` ADD CONSTRAINT `society_users_society_id_societies_id_fk` FOREIGN KEY (`society_id`) REFERENCES `societies`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `society_users` ADD CONSTRAINT `society_users_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;