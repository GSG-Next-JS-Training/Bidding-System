import { UserRoles } from "@/@types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const redirectByRole = (role: UserRoles, router: AppRouterInstance) => {
  switch (role) {
    case "bedding-company":
      router.push("/bidding-dashboard");
      break;
    case "offer-company":
      router.push("/offer-dashboard");
      break;
    case "admin":
      router.push("/dashboard/admin");
      break;
    default:
      router.push("/login");
  }
};
