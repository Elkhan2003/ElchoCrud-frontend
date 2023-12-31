type DateTime = string;

type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
  plan: UserPlan;
  planRange: PlanRange;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  stripeCustomerId: string;
  photo?: string;
  isPhoneVerified: boolean;
  phone?: string;
  preferences?: any;
  submissions: Submission[];
  reviews: Review[];
  lecturesProgress: LectureProgress[];
  weeksProgress: WeekProgress[];
  coursesProgress: CourseProgress[];
  notifications: Notificatn[];
  createdNotifications: Notificatn[];
  batches: UsersOnBatches[];
  Ai: Ai[];
  AiRequest: AiRequest[];
  Notes: Notes[];
};

type Batch = {
  id: number;
  title: string;
  isActive: boolean;
  capacity: number;
  plan: UserPlan;
  slack?: string;
  startDate: string;
  endDate?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  course: Course;
  courseId: number;
  mentor?: Mentor;
  mentorId?: number;
  users: UsersOnBatches[];
};

type Mentor = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  batches: Batch[];
};

type UsersOnBatches = {
  batch: Batch;
  batchId: number;
  user: User;
  userId: number;
};

type UserPlan = "FREE" | "PAID" | "PRO" | "PREMIUM";

type PlanRange = "FREE" | "MONTHLY" | "ANNUALLY";

type UserRole = "ADMIN" | "USER" | "BETATESTER" | "MENTOR";

type Course = {
  id: number;
  title: string;
  isPublished: boolean;
  cover?: string;
  isActive: boolean;
  slug?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  weeks: Week[];
  progress: CourseProgress[];
  batches: Batch[];
};

type Week = {
  id: number;
  title: string;
  isPublished: boolean;
  isActive: boolean;
  slug?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  order: number;
  course: Course;
  courseId: number;
  lectures: Lecture[];
  progress: WeekProgress[];
  numOfExercises: number;
};

type Lecture = {
  id: number;
  title: string;
  video: string;
  description: string;
  notes: string;
  isPublished: boolean;
  isFree: boolean;
  isActive: boolean;
  order: number;
  slug?: string;
  duration?: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  cover?: string;
  week: Week;
  weekId: number;
  exercises: Exercise[];
  reviews: Review[];
  progress: LectureProgress[];
  languageId: Array<number>;
  duration?: number;
};

type Exercise = {
  id: number;
  title: string;
  level: ExerciseLevel;
  description: string;
  isActive: boolean;
  isPublished: boolean;
  slug?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  extras: any[]; // any -> [{title: string; content: string;}]
  testCases: [{ input: string; output: string }]; // any -> [{input: string; output: string;}]
  code: any; // any -> {java: {backend: string; frontend: string;}}
  lecture: Lecture;
  lectureId: number;
  submissions: Submission[];
  Ai: Ai[];
  AiRequest: AiRequest[];
  Notes: Notes[];
  mandatory: boolean;
  languageId: Array<number>;
};

type Submission = {
  exercise: Exercise;
  exerciseId: number;
  user: User;
  userId: number;
  status: SubmissionStatus;
  code: any; // any -> {java: string}
  createdAt: DateTime;
  updatedAt: DateTime;
};

type SubmissionStatus = "TODO" | "SOLVED" | "ATTEMPTED";

type ExerciseLevel = "EASY" | "MEDIUM" | "HARD";

type Review = {
  rating: number;
  comment: string;
  user: User;
  userId: number;
  lecture: Lecture;
  lectureId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
};

type CourseProgress = {
  userId: number;
  user: User;
  courseId: number;
  course: Course;
};

type WeekProgress = {
  userId: number;
  user: User;
  weekId: number;
  week: Week;
};

type LectureProgress = {
  userId: number;
  user: User;
  lectureId: number;
  lecture: Lecture;
};

type NotificationObject = {
  id: number;
  content: string;
  notifications: Notificatn[];
  createdAt: DateTime;
  updatedAt: DateTime;
};

type Notificatn = {
  id: number;
  sender?: User;
  senderId?: number;
  receiver: User;
  receiverId: number;
  readAt?: DateTime;
  notificationId: number;
  notification: NotificationObject;
};

type Ai = {
  id: number;
  input: string;
  output: string;
  exercise: Exercise;
  exerciseId: number;
  user: User;
  userId: number;
  createdAt: DateTime;
  AiRequest: AiRequest[];
};

type AiRequest = {
  id: number;
  exercise: Exercise;
  exerciseId: number;
  user: User;
  userId: number;
  request: number;
  ai: Ai;
  aiId: number;
};

type AiParameters = {
  id: number;
  type: string;
  maxTokens: number;
  availableRequest: number;
  temperature: number;
};

type Notes = {
  id: number;
  notes: string;
  user: User;
  userId: number;
  exercise: Exercise;
  exerciseId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
};
