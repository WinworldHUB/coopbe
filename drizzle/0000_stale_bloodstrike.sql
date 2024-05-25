CREATE TABLE `societies` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	CONSTRAINT `societies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_societies` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`society_id` int NOT NULL,
	CONSTRAINT `user_societies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`phone` varchar(256) NOT NULL,
	`address` varchar(256) NOT NULL,
	`role` varchar(256) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_phone_unique` UNIQUE(`phone`)
);
--> statement-breakpoint
ALTER TABLE `user_societies` ADD CONSTRAINT `user_societies_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_societies` ADD CONSTRAINT `user_societies_society_id_societies_id_fk` FOREIGN KEY (`society_id`) REFERENCES `societies`(`id`) ON DELETE cascade ON UPDATE no action;